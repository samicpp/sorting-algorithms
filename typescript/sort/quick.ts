//import * as check from "./check.ts";

export const quickSort = new class QuickSort {
    operations = 0;
    number(arr: number[], first = true): number[] {
        if (first) this.operations = 0;

        if (arr.length <= 1) return [...arr];
        const narr = arr,//[...arr],
            smaller: number[] = [],
            bigger: number[] = [],
            middle: number[] = [];
        const pivot = narr[narr.length - 1];

        for (const i of narr) {
            if (i == pivot) middle.push(i);
            if (i < pivot) smaller.push(i);
            if (i > pivot) bigger.push(i);
        };

        this.operations++;


        return this.number(smaller, false).concat(middle).concat(this.number(bigger, false));
    }
};

export const quickSortDebug = new class QuickSortDebug {
    workArr: number[] = [];

    async next() { return new Promise(r => setTimeout(r, 100)); }
    async checked() { return new Promise(r => setTimeout(r)); }
    async get(i: number) { return this.workArr[i]; }
    async set(i: number, val: number) { return this.workArr[i] = val; }

    async #partition(low: number, high: number): Promise<number> {
        const pivot = await this.get(high);
        let i = low;

        for (let j = low; j < high; j++) {
            const current = await this.get(j);
            //await this.checked();
            if (current < pivot) {
                const tempI = await this.get(i);
                await this.set(i, current);
                await this.set(j, tempI);
                i++;
                await this.next();
            }
        }

        const tempI = await this.get(i);
        await this.set(i, pivot);
        await this.set(high, tempI);
        await this.next();

        return i;
    }

    async #quickSort(low: number, high: number): Promise<void> {
        if (low < high) {
            const pi = await this.#partition(low, high);
            await this.#quickSort(low, pi - 1);
            await this.#quickSort(pi + 1, high);
        }
    }

    async number(arr: number[]): Promise<number[]> {
        this.workArr = [...arr];
        await this.#quickSort(0, this.workArr.length - 1);
        return this.workArr;
    }
};
