import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal',
  standalone: false,
})
export class Decimal implements PipeTransform {
  // tslint:disable-next-line: typedef
  transform(val: number, args?: any): string {
    try {
      const number = parseFloat(
        val.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
      ).toFixed(2);
      if (number.length) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      } else {
        return number;
      }
    } catch (error) {
      return '0.00';
    }
  }
  constructor() {}
}
