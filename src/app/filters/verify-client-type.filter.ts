import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'verifyClientType'
})
export class VerifyClientType implements PipeTransform {
    transform(valor : number) : string {
        if(valor == 0){
            return "Não Cliente";
        }
        else {
            return "Cliente";
        }
    }
}