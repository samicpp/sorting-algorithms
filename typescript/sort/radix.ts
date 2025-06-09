//import * as check from "./check.ts";

export const radixSort = new class RadixSort {
    operations = 0;

    #nSort(inp: number[], arr: number[], exp = 1) {
        const count: number[] = Array(10).fill(0);
        // console.log("loop through inp");
        for (let i = 0; i < inp.length; i++) {
            const d = Math.floor(inp[i] / exp) % 10;
            count[d]++;
            // console.log(`inp[${i}]=${inp[i]}  digit=${d}`);
        };
        // console.log("count = ",count);
        for (let i = 1; i < 10; i++)count[i] += count[i - 1];
        for (let i = inp.length - 1; i >= 0; i--) {
            const d = Math.floor(inp[i] / exp) % 10;
            const si = --count[d];
            arr[si] = inp[i];
            this.operations++;
            // console.log(`digits=${d}  arr[${si}]=${inp[i]} (inp[${i}])`);
        };
        //for(const i in arr)inp[i]=arr[i];
        //return count;
    }

    number(arr: number[]): number[] {
        this.operations = 0;
        let sorted: number[] = [], narr = [...arr];

        let largest = 0;
        for (const i of narr) { if (i > largest) largest = i };

        //let r=[];

        for (let exp = 1; Math.floor(largest / exp) > 0; exp *= 10) {
            //r.push(this.#nSort(sorted,exp));
            // console.log("\nRadixSort.#nSort()");
            sorted.length = 0;
            this.#nSort(narr, sorted, exp);
            [sorted, narr] = [narr, sorted];
            //sorted.length=0;
        };

        //return r;A
        return narr;
    }
};

export const radixSortDebug = new class RadixSortDebug {
    workArr: number[] = [];
    async next() { return new Promise(r => setTimeout(r)) };
    async checked() { return new Promise(r => setTimeout(r)) };
    async get(i: number) { return this.workArr[i] }
    async set(i: number, val: number) { return this.workArr[i] = val }

    async#nSort(arr: number[], exp = 1) {
        const count: number[] = Array(10).fill(0);
        for (let i = 0; i < this.workArr.length; i++) {
            const d = Math.floor(this.workArr[i] / exp) % 10;
            count[d]++;
        };
        for (let i = 1; i < 10; i++) count[i] += count[i - 1];
        for (let i = this.workArr.length - 1; i >= 0; i--) {
            const d = Math.floor(this.workArr[i] / exp) % 10;
            const si = --count[d];
            arr[si] = await this.get(i);
        };
    }

    async number(arr: number[]): Promise<number[]> {
        let sorted: number[] = [];
        this.workArr = [...arr];

        let largest = 0;
        for (const i of this.workArr) { if (i > largest) largest = i };

        for (let exp = 1; Math.floor(largest / exp) > 0; exp *= 10) {
            sorted.length = 0;
            await this.#nSort(sorted, exp);
            await this.checked();
            [sorted, this.workArr] = [this.workArr, sorted];
            await this.next();
        };

        return this.workArr;
    }
};