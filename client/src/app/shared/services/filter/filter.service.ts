import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterData<T>(arr: T[], filterValue: string, field: string): T[] {
    return arr.filter( (item: T): boolean => {
      return item[field].toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
    });
  }
}
