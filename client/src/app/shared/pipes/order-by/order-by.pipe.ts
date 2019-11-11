import { Pipe, PipeTransform } from '@angular/core';

import { getDateDifference } from '../../../helpers/date-helper';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(data: T[], field: string): T[] {
    return data.sort((value1: T, value2: T) => {
      return getDateDifference(new Date(value2[field]), new Date(value1[field]));
    });
  }
}
