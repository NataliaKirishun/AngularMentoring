import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(data: T[], field: string): T[] {
    return data.sort((value1: T, value2: T) => {
      return (new Date(value2[field])).valueOf() - (new Date(value1[field])).valueOf();
    });
  }
}
