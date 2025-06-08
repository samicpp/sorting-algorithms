//import * as check from "./check.ts";

export const mergeSort = new class MergeSort {
    operations = 0;

    #nMerge(left: number[], right: number[]): number[] {
        let j = 0, i = 0;
        const s: number[] = [];
        while (s.length != (left.length + right.length)) {
            this.operations++;
            if (left[j] !== undefined && right[i] !== undefined) s.push(left[j] <= right[i] ? left[j++] : right[i++]);
            else if (left[j] !== undefined) s.push(left[j++]);
            else if (right[i] !== undefined) s.push(right[i++]);
        };
        //console.log("merged,left,right",s,left,right);
        return s;
    };
    #nSplit(arr: number[]): number[] {
        if (arr.length <= 1) return [...arr];
        const middle = Math.floor(arr.length / 2);
        const left = this.#nSplit(arr.slice(0, middle));
        const right = this.#nSplit(arr.slice(middle));
        this.operations++;
        return this.#nMerge(left, right);
    };
    number(arr: number[]): number[] {
        this.operations = 0;
        return this.#nSplit(arr);
    };
};

export const mergeSortDebug = new class MergeSortDebug {
    workArr: number[] = [];

    // Hooks for visualization
    async next() { return new Promise(r => setTimeout(r)); }
    async checked() { return new Promise(r => setTimeout(r)); }
    async get(index: number) { return this.workArr[index]; }
    async set(index: number, value: number) { return this.workArr[index] = value; }

    async #nMerge(start: number, mid: number, end: number): Promise<void> {
        const left = this.workArr.slice(start, mid);
        const right = this.workArr.slice(mid, end);
        let i = 0, j = 0, k = start;

        while (i < left.length && j < right.length) {
            await this.checked();
            if (left[i] <= right[j]) {
                await this.set(k++, left[i++]);
            } else {
                await this.set(k++, right[j++]);
            }
            await this.next();
        }

        while (i < left.length) {
            await this.set(k++, left[i++]);
            await this.next();
        }

        while (j < right.length) {
            await this.set(k++, right[j++]);
            await this.next();
        }
    }

    async #nSplit(start: number, end: number): Promise<void> {
        if (end - start <= 1) return;

        const mid = Math.floor((start + end) / 2);
        await this.#nSplit(start, mid);
        await this.#nSplit(mid, end);
        await this.#nMerge(start, mid, end);
    }

    async number(arr: number[]): Promise<number[]> {
        this.workArr = [...arr];
        await this.#nSplit(0, this.workArr.length);
        return this.workArr;
    }
}
