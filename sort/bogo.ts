import { shuffle } from "../shuffle.ts";

export const bogoSort=new class BogoSort{
    operations=0;

    number(arr: number[]):number[]{
        this.operations=0;
        let sorted:number[]=[],last:number;
        loop:while(true){
            sorted=shuffle(arr);
            this.operations++;
            last=sorted[0];
            for(let i=1;i<sorted.length;i++){
                if(last>sorted[i])continue loop;
                last=sorted[i]
            };
            break;
        }
        return sorted;
    }
};