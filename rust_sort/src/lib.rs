pub mod sort;
pub mod tools;
pub mod ffi;

use std::time::{Duration, Instant};
use std::thread::{self, sleep};
use std::sync::{ 
    Arc,
    atomic::{ AtomicUsize, Ordering },
    mpsc,
};

// fn main() {
//     println!("Hello, world!");
//     sort::accesibility_test();
//     test_sorts();
// }

fn _test_qbm_sorts()->Vec<(String,Vec<u32>,Duration)>{
    let sv=&tools::shuffled_uint32(1_000);
    println!("{:?}\n",&sv[0..20]);
    
    let (tx,rx)=mpsc::channel::<(String,Vec<u32>,Duration)>();
    let done = Arc::new(AtomicUsize::new(0));

    // quick sort
    {
        let done=done.clone();
        let svc=sv.clone();
        let tx=tx.clone();
        thread::spawn(move || {
            let b=Instant::now();
            let qs=sort::quick::number(svc);
            let d = b.elapsed();
            // println!("quick sort done {:?}",&qs[0..20]);
            // println!("elapsed {}µs",d.as_nanos()as f64 / 1000.0);
            // println!("elapsed {}ms",d.as_micros()as f64 / 1000.0);
            // println!("\n");
            done.fetch_add(1,Ordering::SeqCst);
            let _=tx.send(("quick".to_owned(),qs,d));
        });
    };

    // bubble sort
    {
        let done=done.clone();
        let svc=sv.clone();
        let tx=tx.clone();
        thread::spawn(move || {
            let b=Instant::now();
            let qs=sort::bubble::number(svc);
            let d = b.elapsed();
            // println!("bubble sort done {:?}",&qs[0..20]);
            // println!("elapsed {}µs",d.as_nanos()as f64 / 1000.0);
            // println!("elapsed {}ms",d.as_micros()as f64 / 1000.0);
            // println!("\n");
            done.fetch_add(1,Ordering::SeqCst);
            let _=tx.send(("bubble".to_owned(),qs,d));
        });
    };

    // merge sort
    {
        let done=done.clone();
        let svc=sv.clone();
        let tx=tx.clone();
        thread::spawn(move || {
            let b=Instant::now();
            let qs=sort::merge::number(svc);
            let d = b.elapsed();
            // println!("merge sort done {:?}",&qs[0..20]);
            // println!("elapsed {}µs",d.as_nanos()as f64 / 1000.0);
            // println!("elapsed {}ms",d.as_micros()as f64 / 1000.0);
            // println!("\n");
            done.fetch_add(1,Ordering::SeqCst);
            let _=tx.send(("merge".to_owned(),qs,d));
        });
    };

    loop {
        if 3==done.load(Ordering::SeqCst){break};
        sleep(Duration::from_millis(500));
    };

    drop(tx);
    //let results:Vec<(&str,Vec<u32>,Duration)>=rx.iter().collect();
    rx.iter().collect::<Vec<(String,Vec<u32>,Duration)>>()
    // while done!=3{}
    // print!("done == 3");
    
}

#[cfg(test)]
mod tests {
    use super::*;

    // #[test]
    // fn test_qbm_sorting_algorithms() {
    //     let results = test_qbm_sorts();
    //     for (name, sorted_vec, duration) in results {
    //         println!("{} sort took {}µs ({}s)", name, duration.as_nanos() as f32 /1000.0, duration.as_micros()as f64 /1000000.0);
    //         assert!(tools::is_sorted(&sorted_vec), "{} sort didnt pass check", name);
    //     }
    // }


    // individual

    #[test]
    fn test_quick_sort(){
        let svec=tools::shuffled_uint32(100_000);
        let now=Instant::now();
        let out=sort::quick::number(svec);
        let del=now.elapsed().as_nanos() as f64;

        println!("\x1b[36m quick sort took {}µs = {}s\x1b[0m",del/1000.0,del/1_000_000_000.0);
        assert!(tools::is_sorted(&out),"\x1b[31m quick sort failed\x1b[0m");
    }

    #[test]
    fn test_merge_sort(){
        let svec=tools::shuffled_uint32(100_000);
        let now=Instant::now();
        let out=sort::merge::number(svec);
        let del=now.elapsed().as_nanos() as f64;

        println!("\x1b[36m merge sort took {}µs = {}s\x1b[0m",del/1000.0,del/1_000_000_000.0);
        assert!(tools::is_sorted(&out),"\x1b[31m merge sort failed\x1b[0m");
    }

    #[test]
    fn test_bubble_sort(){
        let svec=tools::shuffled_uint32(100_000);
        let now=Instant::now();
        let out=sort::bubble::number(svec);
        let del=now.elapsed().as_nanos() as f64;

        println!("\x1b[36m bubble sort took {}µs = {}s\x1b[0m",del/1000.0,del/1_000_000_000.0);
        assert!(tools::is_sorted(&out),"\x1b[31m bubble sort failed\x1b[0m");
    }

    #[test]
    fn test_radix_sort(){
        let svec=tools::shuffled_uint32(100_000);
        let now=Instant::now();
        let out=sort::radix::number(svec);
        let del=now.elapsed().as_nanos() as f64;

        println!("\x1b[36m radix sort took {}µs = {}s\x1b[0m",del/1000.0,del/1_000_000_000.0);
        assert!(tools::is_sorted(&out),"\x1b[31m radix sort failed\x1b[0m {:?}",&out[0..20]);
    }

    #[test]
    fn test_heap_sort(){
        let svec=tools::shuffled_uint32(100_000);
        let now=Instant::now();
        let out=sort::heap::number(svec);
        let del=now.elapsed().as_nanos() as f64;

        println!("\x1b[36m heap sort took {}µs = {}s\x1b[0m",del/1000.0,del/1_000_000_000.0);
        assert!(tools::is_sorted(&out),"\x1b[31m heap sort failed\x1b[0m {:?}",&out[0..20]);
    }

    #[test]
    #[ignore]
    fn test_nosort(){
        let svec=tools::shuffled_uint32(1_000);
        let out=sort::nosort::number(svec);

        assert!(!tools::is_sorted(&out),"\x1b[31m shuffled array was sorted\x1b[0m");
    }

    #[test]
    fn test_stalin_sort(){
        let svec=tools::shuffled_uint32(100_000);
        let now=Instant::now();
        let out=sort::stalin::number(svec);
        let del=now.elapsed().as_nanos() as f64;

        println!("\x1b[36m stalin sort took {}µs = {}s\x1b[0m",del/1000.0,del/1_000_000_000.0);
        assert!(tools::is_sorted(&out),"\x1b[31m stalin sort failed\x1b[0m");
    }

    #[test]
    fn test_bogo_sort(){
        let svec=tools::shuffled_uint32(10);
        let now=Instant::now();
        let out=sort::bogo::number(svec);
        let del=now.elapsed().as_nanos() as f64;

        println!("\x1b[36m bogo sort took {}µs = {}s\x1b[0m",del/1000.0,del/1_000_000_000.0);
        assert!(tools::is_sorted(&out),"\x1b[31m bogo sort failed\x1b[0m");
    }
}
