import * as check from "./check.ts";

export const quickSort=new class QuickSort{
    operations=0;
    number(arr: number[],first=true):number[]{
        if(first)this.operations=0;

        if(arr.length<=1)return [...arr];
        const narr=arr,//[...arr],
        smaller:number[]=[],
        bigger:number[]=[],
        middle:number[]=[];
        let pivot=narr[narr.length-1];
        
        for(let i of narr){
            if(i==pivot)middle.push(i);
            if(i<pivot)smaller.push(i);
            if(i>pivot)bigger.push(i);
        };

        this.operations++;


        return this.number(smaller,false).concat(middle).concat(this.number(bigger,false));
    }
}