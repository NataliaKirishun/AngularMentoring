import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform<T>(data: T[], filterValue: string, field: string): T[] {
    return data.filter( (item: T): boolean => {
      return item[field].toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
    });
  }
}
