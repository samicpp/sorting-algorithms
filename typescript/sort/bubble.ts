import * as check from "./check.ts";

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
                    let t=narr[j];
                    narr[j]=narr[j+1];
                    narr[j+1]=t;
                    this.operations++;
                }
                //console.log("fixed",narr[j]<narr[j+1])
            }
        }
        
        return narr;
    }
}