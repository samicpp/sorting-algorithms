use rand::seq::SliceRandom;
use rand::rng;


pub fn shuffled_uint32(length: u32)->Vec<u32>{
    let mut v:Vec<u32>=(0..length).collect();
    let mut rng = rng();
    v.shuffle(&mut rng);
    v
}

pub fn is_sorted(arr: &[u32])->bool{
    arr.windows(2).all(|w|w[0]<=w[1])
}