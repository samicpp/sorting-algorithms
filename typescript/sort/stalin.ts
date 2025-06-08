//import * as check from "./check.ts";

export const stalinSort = new class StalinSort {
    operations = 0;

    number(arr: number[]): number[] {
        this.operations = 0;
        const sorted: number[] = [arr[0]];
        for (let i = 1; i < arr.length; i++) {
            if (sorted[sorted.length - 1] < arr[i]) sorted.push(arr[i]);
            this.operations++;
        };
        return sorted;
    }
};

export const SortDebug = new class SortDebug {
    workArr: number[] = [];
    async next() { return new Promise(r => setTimeout(r)) };
    async checked() { return new Promise(r => setTimeout(r)) };
    async get(name: number) { return this.workArr[name] }
    async set(name: number, value: number) { return this.workArr[name] = value }

    async number(arr: number[]): Promise<number[]> {
        const narr = this.workArr = [...arr];
        for (let i = 1; i < arr.length; i++) {
            if (await this.get(i - 1) > await this.get(i)) {
                narr.splice(i, 1);
                i--;
            };
            await this.next();
        };
        return narr;
    }
};