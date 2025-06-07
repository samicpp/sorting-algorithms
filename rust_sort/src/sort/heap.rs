use num_traits::{Num, NumCast, ToPrimitive};

fn number_heapify<T>(arr: &mut Vec<T>, n: T, i: T) -> () where T: PartialEq + PartialOrd + Copy + NumCast + ToPrimitive + Num{
    let mut max=i;
    let left=T::from(2).unwrap()*i+T::from(1).unwrap();
    let right=T::from(2).unwrap()*i+T::from(2).unwrap();
    
    if left<n&&arr[left.to_usize().unwrap()]>arr[max.to_usize().unwrap()]{
        max=left;
    } if right<n&&arr[right.to_usize().unwrap()]>arr[max.to_usize().unwrap()]{
        max=right;
    } if max!=i{
        [arr[i.to_usize().unwrap()], arr[max.to_usize().unwrap()]] = [arr[max.to_usize().unwrap()], arr[i.to_usize().unwrap()]];
        number_heapify(arr,n,max);
    }
}

pub fn number<T>(mut arr: Vec<T>) -> Vec<T> where T: PartialEq + PartialOrd + Copy + NumCast + ToPrimitive + Num{
    let len=arr.len();
    let mut i=len/2;
    while i>0{
        i-=1;
        number_heapify(&mut arr,T::from(len).unwrap(),T::from(i).unwrap());
    }
    let mut i=len;
    while i>0{
        i-=1;
        [arr[0],arr[i]]=[arr[i],arr[0]];
        number_heapify(&mut arr, T::from(i).unwrap(), T::from(0).unwrap());
    }

    arr
}
