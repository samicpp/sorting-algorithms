//import * as check from "./check.ts";

export const heapSort=new class HeapSort{
    operations=0;

    #nHeapify(arr:number[], n:number, i:number){
        this.operations++;
        let max=i;
        const left=2*i+1;
        const right=2*i+2;
        
        if(left<n&&arr[left]>arr[max]){
            max=left;
        } if(right<n&&arr[right]>arr[max]){
            max=right;
        } if(max!==i){
            [arr[i], arr[max]] = [arr[max], arr[i]];
            this.#nHeapify(arr,n,max);
        }
    }
    number(arr: number[]):number[]{
        const narr=[...arr];
        
        for(let i=Math.floor(arr.length/2)-1; i>=0; i--){
            this.#nHeapify(narr,arr.length,i);
        }
        for(let i=arr.length-1;i>0;i--){
            [narr[0],narr[i]]=[narr[i],narr[0]];
            this.#nHeapify(narr, i, 0);
        }

        return narr;
    }
}