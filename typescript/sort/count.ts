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

export const countSortDebug = new class countSortDebug {
    workArr: number[] = [];
    async next() { return new Promise(r => setTimeout(r)) };
    async checked() { return new Promise(r => setTimeout(r)) };
    async get(name: number|string ) { return this.workArr[name] }
    async set(name: number, value: number) { return this.workArr[name] = value }

    async number(arr: number[]): Promise<number[]> {
        const narr = this.workArr = [...arr], sorted: number[] = new Array(narr.length) ;

        let max=await this.get(0);
        for(const e of narr){
            //const e=await this.get(i);
            max=max<e?e:max
        };

        const count=new Array(max+1).fill(0);

        count[await this.get(0)]++;
        for(let i=1;i<narr.length;i++){
            count[await this.get(i)]++;
            await this.next();
        };
        for(let i=1;i<=max;i++){
            count[i]+=count[i-1];
        };

        for(let i=narr.length-1;i>=0;i--){
            const v=await this.get(i);
            sorted[count[v]-1]=v;
            count[v]--;
            await this.next();
        };
        for(const i of sorted){
            await this.set(i,sorted[i]);
            await this.next();
        };
        
        return this.workArr;
    }
};