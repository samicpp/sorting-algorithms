pub fn number<T>(mut narr: Vec<T>)->Vec<T>
where T: PartialEq + PartialOrd + Copy,
{
    for _i in 0..narr.len()-1{
        for j in 0..narr.len()-1{
            //console.log(narr[j]>narr[j+1],narr[j],narr[j+1])
            if narr[j]>narr[j+1] {
                //console.log("if statement triggered");
                let t=narr[j];
                narr[j]=narr[j+1];
                narr[j+1]=t;
            }
            //console.log("fixed",narr[j]<narr[j+1])
        }
    }
    
    return narr;
}