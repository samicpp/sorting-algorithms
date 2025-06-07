//import * as check from "./check.ts";

export const stalinSort=new class StalinSort{
    operations=0;

    number(arr: number[]):number[]{
        this.operations=0;
        const sorted:number[]=[arr[0]];
        for(let i=1;i<arr.length;i++){
            if(sorted[sorted.length-1]<arr[i])sorted.push(arr[i]);
            this.operations++;
        };
        return sorted;
    }
};