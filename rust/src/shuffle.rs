use rand::seq::SliceRandom;
use rand::rng;


pub fn shuffled_uint32(length: u32)->Vec<u32>{
    let mut v:Vec<u32>=(0..length).collect();
    let mut rng = rng();
    v.shuffle(&mut rng);
    v
}