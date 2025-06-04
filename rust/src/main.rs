mod sort;
mod shuffle;
use std::time::Instant;
use std::thread;

fn main() {
    println!("Hello, world!");
    sort::quick::accesibility_test();
    test_sorts();
}

fn test_sorts(){
    let sv=&shuffle::shuffled_uint32(30_000);
    println!("{:?}\n",&sv[0..20]);

    // quick sort
    {
        let svc=sv.clone();
        thread::spawn(move || {
            let b=Instant::now();
            let qs=sort::quick::number(svc);
            let d = b.elapsed();
            println!("quick sort done {:?}",&qs[0..20]);
            println!("elapsed {}µs",d.as_nanos()as f64 / 1000.0);
            println!("elapsed {}ms",d.as_micros()as f64 / 1000.0);
            println!("\n");
        });
    };

    // bubble sort
    {
        let svc=sv.clone();
        thread::spawn(move || {
            let b=Instant::now();
            let qs=sort::bubble::number(svc);
            let d = b.elapsed();
            println!("bubble sort done {:?}",&qs[0..20]);
            println!("elapsed {}µs",d.as_nanos()as f64 / 1000.0);
            println!("elapsed {}ms",d.as_micros()as f64 / 1000.0);
            println!("\n");
        });
    };

    // merge sort
    {
        let svc=sv.clone();
        thread::spawn(move || {
            let b=Instant::now();
            let qs=sort::merge::number(svc);
            let d = b.elapsed();
            println!("merge sort done {:?}",&qs[0..20]);
            println!("elapsed {}µs",d.as_nanos()as f64 / 1000.0);
            println!("elapsed {}ms",d.as_micros()as f64 / 1000.0);
            println!("\n");
        });
    };

    loop {};
    // while done!=3{}
    // print!("done == 3");
    
}