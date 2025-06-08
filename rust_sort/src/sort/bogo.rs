// unconventional
use crate::tools;

use rand::seq::SliceRandom;
use rand_chacha::ChaCha8Rng;
use rand::SeedableRng;

pub fn number<T>(mut arr: Vec<T>) -> Vec<T> where T: PartialEq + PartialOrd + Copy {
    let mut rng = ChaCha8Rng::seed_from_u64(43);
    while !tools::is_sorted(&arr){
        arr.shuffle(&mut rng);
    }
    arr
}