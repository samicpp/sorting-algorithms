//import * as mod from "./";

export const countSort = new class CountSort {
    operations = 0;

    number(arr: number[]): number[] {
        this.operations = 0;
        const narr = [...arr], sorted: number[] = new Array(narr.length) ;

        let max=narr[0];
        for(const e of narr)max=max<e?e:max;

        const count=new Array(max+1).fill(0);

        count[narr[0]]++;
        for(let i=1;i<narr.length;i++){
            this.operations++;
            count[narr[i]]++;
        };
        for(let i=1;i<=max;i++){
            count[i]+=count[i-1];
        };

        for(let i=narr.length-1;i>=0;i--){
            this.operations++;
            sorted[count[narr[i]]-1]=narr[i];
            count[narr[i]]--;
        };
        
        return sorted;
    }
};