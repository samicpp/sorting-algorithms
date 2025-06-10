use std::ops::{AddAssign,SubAssign};
use num_traits::{Num,NumCast,ToPrimitive};

pub fn number<T>(arr: Vec<T>) -> Vec<T> where T: PartialEq + PartialOrd + Num + NumCast + Copy + ToPrimitive + AddAssign + SubAssign {
    
    let mut sorted: Vec<T>=Vec::new();
    sorted.resize(arr.len(),T::from(0).unwrap());

    let mut max=arr[0];
    for e in &arr{
        if *e>max{max=*e};
    };

    let mut count: Vec<T>=Vec::new();
    count.resize(max.to_usize().unwrap()+1, T::from(0).unwrap());

    count[arr[0].to_usize().unwrap()]+=T::from(1).unwrap();
    for i in 1..arr.len(){
        count[arr[i].to_usize().unwrap()]+=T::from(1).unwrap();
    };
    for i in 1..=max.to_usize().unwrap(){
        let tmp=count[i-1];
        count[i]+=tmp;
    };

    let mut i=arr.len();
    while i>0{
        i-=1;
        sorted[count[arr[i].to_usize().unwrap()].to_usize().unwrap()-1]=arr[i];
        count[arr[i].to_usize().unwrap()]-=T::from(1).unwrap();
    };
    
    sorted
}