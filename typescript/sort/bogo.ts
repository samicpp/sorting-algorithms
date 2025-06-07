import { shuffle } from "../shuffle.ts";
import * as check from "./check.ts";

export const bogoSort=new class BogoSort{
    operations=0;

    number(arr: number[]):number[]{
        this.operations=0;
        let sorted:number[]=[];
        while(true){
            sorted=shuffle(arr);
            this.operations++;
            if(check.number(sorted))break;
        }
        return sorted;
    }
};