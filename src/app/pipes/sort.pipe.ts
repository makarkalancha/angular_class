import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<Product>, field: keyof Product, sortOrder: String): Array<Product> {
    if (sortOrder === 'asc') {
      return value.sort((val1, val2) => {
        if(val1[field] > val2[field]){
          return 1;
        }else if (val1[field] < val2[field]) {
          return -1;
        }
        return 0;
      });
    } else if (sortOrder === 'desc') {
      return value.sort((val1, val2) => {
        if (val2[field] > val1[field]) {
          return 1;
        } else if (val2[field] < val1[field]) {
          return -1;
        } 
        return 0;
      });
    }
  }
}
