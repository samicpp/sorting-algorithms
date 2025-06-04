import { ShuffledUintArray } from "./shuffle.ts";
import { bogoSort, } from "./sort/mod.ts";

const usarr=new ShuffledUintArray(20);

console.log("unsorted array",usarr);

const b=Date.now();
const sarr=bogoSort.number(usarr);
const d=Date.now()-b;

console.log("sorted array",sarr,bogoSort.operations,d/1000);
