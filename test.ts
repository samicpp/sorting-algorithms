import { ShuffledUintArray } from "./shuffle.ts";
import { bogoSort, bubbleSort, heapSort, mergeSort, quickSort, radixSort } from "./sort/mod.ts";

let b=Date.now();
const usarr=new ShuffledUintArray(20);
let d=Date.now()-b;

console.log("unsorted array",usarr);
console.log(`unsorted array created after ${d/1000} seconds`);
console.log("\n\n");

// {
//     // bogo sort
//     console.log("only using a slice for bogosort")
//     b=Date.now();
//     const sarr=bogoSort.number(usarr.slice(0,10));
//     d=Date.now()-b;

//     console.log("bogo sorted array",sarr);
//     console.log(`number of operations ${bogoSort.operations}\nbogo sort finished after ${d/1000} seconds\n`);
// };
{
    // builtin sort
    b=Date.now();
    const sarr=[...usarr].sort();
    d=Date.now()-b;

    console.log("builtin sorted array",sarr);
    console.log(`number of operations unkown\nbuiltin sort finished after ${d/1000} seconds\n`);
};
{
    // bubble sort
    b=Date.now();
    const sarr=bubbleSort.number(usarr);
    d=Date.now()-b;

    console.log("bubble sorted array",sarr);
    console.log(`number of operations ${bubbleSort.operations}\nbubble sort finished after ${d/1000} seconds\n`);
};
{
    // quick sort
    b=Date.now();
    const sarr=quickSort.number(usarr);
    d=Date.now()-b;

    console.log("quick sorted array",sarr);
    console.log(`number of operations ${quickSort.operations}\nquick sort finished after ${d/1000} seconds\n`);
};
{
    // merge sort
    b=Date.now();
    const sarr=mergeSort.number(usarr);
    d=Date.now()-b;

    console.log("merge sorted array",sarr);
    console.log(`number of operations ${mergeSort.operations}\nmerge sort finished after ${d/1000} seconds\n`);
};