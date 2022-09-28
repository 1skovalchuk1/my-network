import { Pipe, PipeTransform } from '@angular/core';
import { IPal } from 'src/app/interfaces/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pals: Array<IPal>, searchPals: string): Array<IPal> {
    if (pals.length === 0 || !searchPals) {
      return pals;
    }
    return pals.filter((pal) => {
      console.log(pal)
      return pal.userName.toLocaleLowerCase().startsWith(searchPals.toLocaleLowerCase())
    })
  }

}
