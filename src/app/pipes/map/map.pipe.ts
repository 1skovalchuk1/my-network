import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {

  transform(items: any, fn: (i:any) => any): any {
    if (items.length === 0) {
      return items;
    }
    return items.map((i:any) => fn(i))
  }

}
