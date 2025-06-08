//import * as check from "./check.ts";

export const bubbleSort=new class BubbleSort{
    operations=0;

    number(arr: number[]):number[]{
        this.operations=0;
        const narr=[...arr];
        
        for(let i=0;i<narr.length;i++){
            for(let j=0;j<narr.length;j++){
                //console.log(narr[j]>narr[j+1],narr[j],narr[j+1])
                if(narr[j]>narr[j+1]){
                    //console.log("if statement triggered");
                    const t=narr[j];
                    narr[j]=narr[j+1];
                    narr[j+1]=t;
                    this.operations++;
                }
                //console.log("fixed",narr[j]<narr[j+1])
            }
        }
        
        return narr;
    }
};

export const bubbleSortDebug=new class BubbleSortDebug{
    workArr:number[]=[];
    async next(){return new Promise(r=>setTimeout(r))};
    async checked(){return new Promise(r=>setTimeout(r))};
    async get(name:number){return this.workArr[name]}
    async set(name:number,value:number){return this.workArr[name]=value}

    async number(arr: number[]):Promise<number[]>{
        const narr=this.workArr=[...arr];
        
        for(let i=0;i<narr.length;i++){
            for(let j=0;j<narr.length;j++){
                //console.log(narr[j]>narr[j+1],narr[j],narr[j+1])
                if(narr[j]>narr[j+1]){
                    //console.log("if statement triggered");
                    const t=await this.get(j);
                    await this.set(j,j+1);
                    await this.set(j+1,t);
                }
                //console.log("fixed",narr[j]<narr[j+1])
            }
        }
        
        return narr;
    }
};