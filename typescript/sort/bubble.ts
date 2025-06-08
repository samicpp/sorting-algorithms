//import * as check from "./check.ts";

export const bubbleSort = new class BubbleSort {
    operations = 0;

    number(arr: number[]): number[] {
        this.operations = 0;
        const narr = [...arr];

        for (let i = 0; i < narr.length; i++) {
            for (let j = 0; j < narr.length; j++) {
                //console.log(narr[j]>narr[j+1],narr[j],narr[j+1])
                if (narr[j] > narr[j + 1]) {
                    //console.log("if statement triggered");
                    [narr[j], narr[j + 1]] = [narr[j + 1], narr[j]];
                    // const t=narr[j];
                    // narr[j]=narr[j+1];
                    // narr[j+1]=t;
                    this.operations++;
                }
                //console.log("fixed",narr[j]<narr[j+1])
            }
        }

        return narr;
    }
};

export const bubbleSortDebug = new class BubbleSortDebug {
    workArr: number[] = [];
    async next() { return new Promise(r => setTimeout(r)) };
    async checked() { return new Promise(r => setTimeout(r)) };
    async get(i: number) { return this.workArr[i] }
    async set(i: number, val: number) { return this.workArr[i] = val }

    async number(arr: number[]): Promise<number[]> {
        const narr = this.workArr = [...arr];

        for (let i = 0; i < narr.length; i++) {
            for (let j = 0; j < narr.length; j++) {
                if (narr[j] > narr[j + 1]) {
                    const t = await this.get(j);
                    await this.set(j, await this.get(j + 1));
                    await this.set(j + 1, t);
                    await this.next();
                }
            }
        }

        return narr;
    }
};