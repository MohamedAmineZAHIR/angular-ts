import {Pipe, PipeTransform} from '@angular/core';
import {Item} from '../models/item';

@Pipe({
    name: 'itemFilter'
})
export class ItemPipe implements PipeTransform {
    transform(value: Item[], args: string[]): any {
       let filter = args[0];

       if (filter) {
           filter.toLocaleLowerCase();
       }

       return filter ? value.filter(item => item.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
