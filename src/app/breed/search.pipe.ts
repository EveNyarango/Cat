import { Pipe, PipeTransform } from '@angular/core';
import { Cat } from '../model/cat';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(cats: Cat[], searchInput: string): any[]{     
        if(!searchInput) {
            return cats;
        }
       searchInput = searchInput.toLowerCase();
       return cats.filter(
           cat =>cat.name.toLowerCase().includes(searchInput)
       )
     }
}