use rand::seq::SliceRandom;
use rand_chacha::ChaCha8Rng;
use rand::SeedableRng;

pub fn shuffled_uint32(length: u32) -> Vec<u32> {
    let mut v: Vec<u32> = (0..length).collect();
    let mut rng = ChaCha8Rng::seed_from_u64(42);
    v.shuffle(&mut rng);
    v
}

pub fn is_sorted<T>(arr: &[T])->bool where T: PartialEq + PartialOrd{
    arr.windows(2).all(|w|w[0]<=w[1])
}