pub fn number<T>(arr: Vec<T>)->Vec<T>
where T: PartialEq + PartialOrd + Copy,
{
    if arr.len()<=1 {return arr};
    let mut middle:Vec<T>=Vec::new();
    let mut smaller:Vec<T>=Vec::new();
    let mut bigger:Vec<T>=Vec::new();
    let pivot= arr[arr.len()-1];
    
    for i in arr{
        if i==pivot {middle.push(i)};
        if i<pivot {smaller.push(i)};
        if i>pivot {bigger.push(i)};
    };


    let mut data = number(smaller);
    data.extend(middle);
    data.extend(number(bigger));
    data
}