fn number_merge<T>(left: Vec<T>, right: Vec<T>)->Vec<T>
where T: PartialEq + PartialOrd + Copy,
{
    let mut j=0;
    let mut i=0;
    let ll=left.len();
    let rl=right.len();
    let nl=ll+rl;
    let mut s:Vec<T>=Vec::new();
    while s.len()!=nl {
        if ll>j&&rl>i {s.push(if left[j]<=right[i]{j+=1;left[j-1]}else{i+=1;right[i-1]});}
        else if ll>j {j+=1;s.push(left[j-1]);}
        else if rl>i {i+=1;s.push(right[i-1]);}
    };
    //console.log("merged,left,right",s,left,right);
    return s;
}

pub fn number<T>(arr: Vec<T>)->Vec<T>
where T: PartialEq + PartialOrd + Copy,
{
    if arr.len()<=1 {return arr;}
    let middle=arr.len()/2;
    let left=number(arr[0..middle].to_vec());
    let right=number(arr[middle..arr.len()].to_vec());
    return number_merge(left,right);
}