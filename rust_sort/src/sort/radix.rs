use std::ops::{AddAssign,SubAssign};
use num_traits::{Num,NumCast,ToPrimitive};

fn number_cycle<T>(inp: &mut [T], arr: &mut [T], exp: T, base: T) -> () where T: PartialEq + PartialOrd + Num + NumCast + Copy + ToPrimitive + AddAssign + SubAssign{
    let mut count:Vec<T>=vec![T::from(0).unwrap();base.to_usize().unwrap()];

    for i in 0..inp.len(){
        let d: usize = (inp[i]/exp).to_usize().unwrap()%base.to_usize().unwrap();
        count[d]+=T::from(1).unwrap();
    };

    //let ocount=count;
    //let mut count=ocount.clone();
    for i in 1..10 {
        let t=count[i-1];
        count[i]+=t;
    };
    let mut i: usize=inp.len();
    while i>0{
        i-=1;
        let d = (inp[i]/exp).to_usize().unwrap()%10;
        count[d]-=T::from(1).unwrap();
        let si=count[d].to_usize().unwrap();
        arr[si]=inp[i];
    };
}

pub fn number<T>(mut arr: Vec<T>, base: T) -> Vec<T> where T: PartialEq + PartialOrd + Num + NumCast + Copy + ToPrimitive + AddAssign + SubAssign {
    let mut sorted:Vec<T>=vec![T::from(0).unwrap();arr.len()];
    
    let mut largest:T=T::from(0).unwrap();
    for i in &arr{ if *i>largest{largest=*i} };
    let largest=largest.to_i32().unwrap();
    let mut exp: i32=1;
    while largest/exp>0 {
        //sorted.clear(); sorted.resize(arr.len(), T::from(0).unwrap());
        number_cycle(&mut arr,&mut sorted,T::from(exp).unwrap(),base);
        //[sorted,arr]=[arr,sorted];
        std::mem::swap(&mut arr, &mut sorted);
        exp*=base.to_i32().unwrap();
    };
    arr
}