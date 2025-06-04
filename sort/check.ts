export function number(arr: number[]):boolean{
    if(arr.length<2)return true;
    let last=arr[0];
    for(let i=1;i<arr.length;i++){
        if(last>arr[i])return false;
        last=arr[i]
    };
    return true;
}