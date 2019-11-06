import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderByService {

  setOrderByField<T>(array: T[], field: string): T[] {
    return array.sort((value1: T, value2: T) => {
      return (new Date(value2[field])).valueOf() - (new Date(value1[field])).valueOf();
    });
  }
}
