import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<any> | null, searchItme: string, searchKey: string): Array<any> | null {
    if (!items || items.length === 0 || !searchItme) {
      return items;
    }
    return items.filter((i:any) => i[searchKey].toLowerCase().startsWith(searchItme.toLowerCase()))
  }

}
