mod sort;
mod shuffle;
use std::time::Instant;

fn main() {
    println!("Hello, world!");
    sort::quick::accesibility_test();
    test_sorts();
}

fn test_sorts(){
    let sv=&shuffle::shuffled_uint32(10_000);
    println!("{:?}\n",&sv[0..20]);

    // quick sort
    let b=Instant::now();
    let qs=sort::quick::number(sv.clone());
    let d = b.elapsed();
    println!("quick sort done {:?}",&qs[0..20]);
    println!("elapsed {}µs",d.as_nanos()as f64 / 1000.0);
    println!("elapsed {}ms",d.as_micros()as f64 / 1000.0);
    println!("\n");

    // bubble sort
    let b=Instant::now();
    let qs=sort::bubble::number(sv.clone());
    let d = b.elapsed();
    println!("bubble sort done {:?}",&qs[0..20]);
    println!("elapsed {}µs",d.as_nanos()as f64 / 1000.0);
    println!("elapsed {}ms",d.as_micros()as f64 / 1000.0);
    println!("\n");

    // merge sort
    let b=Instant::now();
    let qs=sort::merge::number(sv.clone());
    let d = b.elapsed();
    println!("merge sort done {:?}",&qs[0..20]);
    println!("elapsed {}µs",d.as_nanos()as f64 / 1000.0);
    println!("elapsed {}ms",d.as_micros()as f64 / 1000.0);
    println!("\n");

    
}