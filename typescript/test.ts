import { RandomUintArray, ShuffledUintArray } from "./shuffle.ts";
import { bogoSort, bubbleSort, heapSort, mergeSort, quickSort, radixSort, stalinSort, check } from "./sort/mod.ts";

let b=Date.now();
const usarr=new ShuffledUintArray(50_000); // base case
//const usarr=[...Array(20_000)].map((v,i)=>i); // best case
//const usarr=[...Array(20_000)].map((v,i)=>i).reverse(); // worst case
//const usarr=new RandomUintArray(20_000); // random case
let d=Date.now()-b;

console.log("unsorted array",usarr);
console.log(`unsorted array created after ${d/1000} seconds`);
console.log("\n\n");

{
    // bogo sort
    b=Date.now();
    const sarr=bogoSort.number(usarr.slice(0,10));
    d=Date.now()-b;

    console.log("only using a slice for bogosort")
    console.log("bogo sorted array",sarr);
    console.log(`number of operations ${bogoSort.operations}\nbogo sort finished after ${d/1000} seconds\npasses check ${check.number(sarr)}\n`);
}
{
    // stalin sort
    b=Date.now();
    const sarr=stalinSort.number(usarr);
    d=Date.now()-b;

    console.log("stalin sorted array",sarr);
    console.log(`number of operations ${stalinSort.operations}\nstalin sort finished after ${d/1000} seconds\npasses check ${check.number(sarr)}\n`);
}
{
    // builtin sort
    b=Date.now();
    const sarr=[...usarr].sort();
    d=Date.now()-b;

    console.log("builtin sorted array",sarr);
    console.log(`number of operations unkown\nbuiltin sort finished after ${d/1000} seconds\npasses check ${check.number(sarr)}\n`);
}
{
    // bubble sort
    b=Date.now();
    const sarr=bubbleSort.number(usarr);
    d=Date.now()-b;

    console.log("bubble sorted array",sarr);
    console.log(`number of operations ${bubbleSort.operations}\nbubble sort finished after ${d/1000} seconds\npasses check ${check.number(sarr)}\n`);
}
{
    // quick sort
    b=Date.now();
    const sarr=quickSort.number(usarr);
    d=Date.now()-b;

    console.log("quick sorted array",sarr);
    console.log(`number of operations ${quickSort.operations}\nquick sort finished after ${d/1000} seconds\npasses check ${check.number(sarr)}\n`);
}
{
    // merge sort
    b=Date.now();
    const sarr=mergeSort.number(usarr);
    d=Date.now()-b;

    console.log("merge sorted array",sarr);
    console.log(`number of operations ${mergeSort.operations}\nmerge sort finished after ${d/1000} seconds\npasses check ${check.number(sarr)}\n`);
}
{
    // radix sort
    b=Date.now();
    const sarr=radixSort.number(usarr);
    d=Date.now()-b;

    console.log("radix sorted array",sarr);
    console.log(`number of operations ${radixSort.operations}\nradix sort finished after ${d/1000} seconds\npasses check ${check.number(sarr)}\n`);
}
{
    // heap sort
    b=Date.now();
    const sarr=heapSort.number(usarr);
    d=Date.now()-b;

    console.log("heap sorted array",sarr);
    console.log(`number of operations ${heapSort.operations}\nheap sort finished after ${d/1000} seconds\npasses check ${check.number(sarr)}\n`);
}