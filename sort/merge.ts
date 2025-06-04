import * as check from "./check.ts";

export const mergeSort=new class MergeSort{
    operations=0;

    #nSplit(arr){

    };
    #nMerge(left,right):number[]{
        let j=0,i=0,s:number[]=[];
        while(s.length!=(left.length+right.length)){
            this.operations++;
            if(left[j]!==undefined&&right[i]!==undefined)s.push(left[j]<=right[i]?left[j++]:right[i++]);
            else if(left[j]!==undefined)s.push(left[j++]);
            else if(right[i]!==undefined)s.push(right[i++]);
        };
        //console.log("merged,left,right",s,left,right);
        return s;
    };
    number(arr: number[],first=true):number[]{
        if(first)this.operations=0;
        if(arr.length<=1)return [...arr];
        let middle=Math.floor(arr.length/2);
        let left=this.number(arr.slice(0,middle),false);
        let right=this.number(arr.slice(middle),false);
        this.operations++;
        return this.#nMerge(left,right);
    };
}