// unconventional
use crate::tools;

use rand::seq::SliceRandom;
use rand::rng;

pub fn number<T>(mut arr: Vec<T>) -> Vec<T> where T: PartialEq + PartialOrd + Copy {
    let rng=&mut rng();
    while !tools::is_sorted(&arr){
        arr.shuffle(rng);
    }
    arr
}