import { ByteLib } from "./buffer.ts";
const blib=new ByteLib;

export class ShuffledUintArray extends Array{
    constructor(length){
        const barr=[...Array(length)];
        for(let i in barr)barr[i]=parseInt(i,10);
        super();
        while(barr.length>0){
            let i=Math.floor(Math.random()*barr.length);
            this.push(barr[i]);
            barr.splice(i,1);
        }
        // console.log(barr,uarr);
        // console.log(uarr.sort())
    }
};
export class ShuffledIntArray extends Array{
    constructor(length){
        const barr=[...Array(length)];
        for(let i in barr)barr[i]=length/2-parseInt(i,10);
        super();
        while(barr.length>0){
            let i=Math.floor(Math.random()*barr.length);
            this.push(barr[i]);
            barr.splice(i,1);
        }
        // console.log(barr,uarr);
        // console.log(uarr.sort())
    }
};
export class ShuffledStringArray extends Array{
    constructor(length){
        const barr=[...Array(length)];
        //const buff=new Uint8Array(blib.bytes(length));
        for(let i in barr){
            //barr[i]=length/2-parseInt(i,10);
            barr[i]=String.fromCharCode(...blib.decInt(parseInt(i)));
        };
        super();
        while(barr.length>0){
            let i=Math.floor(Math.random()*barr.length);
            this.push(barr[i]);
            barr.splice(i,1);
        }
        // console.log(barr,uarr);
        // console.log(uarr.sort())
    }
};

export function shuffle<T>(arr: T[]): T[]{
    const barr: T[]=[...arr];
    //for(let i in barr)barr[i]=parseInt(i,10);
    const sarr: T[]=[];
    while(barr.length>0){
        let i=Math.floor(Math.random()*barr.length);
        sarr.push(barr[i]);
        barr.splice(i,1);
    };
    return sarr;
};


