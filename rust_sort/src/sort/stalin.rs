// unconventional

pub fn number<T>(arr: Vec<T>) -> Vec<T> where T: PartialEq + PartialOrd + Copy {
    let mut res:Vec<T>=Vec::new();
    let mut last:T=arr[0];
    res.push(last);
    for e in &arr[1..arr.len()]{
        if *e>last{
            res.push(*e);
            last=*e;
        }
    }
    res
}