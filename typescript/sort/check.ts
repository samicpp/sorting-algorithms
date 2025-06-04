export function number(arr: number[]):boolean{
    if(arr.length<=1)return true;
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]>arr[i])return false;
    }
    return true;
}