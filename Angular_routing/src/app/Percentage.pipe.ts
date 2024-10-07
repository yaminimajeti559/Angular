import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'percentage'
})
export class percentagePipe implements PipeTransform{
    transform(value: any) {
        return value*100;
    }  
}