import { Pipe, PipeTransform } from '@angular/core';
import { IPal } from 'src/app/interfaces/pals';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<any>, searchItme: string, searchKey: string): Array<any> {
    if (items.length === 0 || !searchItme) {
      return items;
    }
    return items.filter((i:any) => i[searchKey].toLowerCase().startsWith(searchItme.toLowerCase()))
  }

}
