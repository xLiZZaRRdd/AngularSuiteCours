import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp'
})
export class ConvertTempPipe implements PipeTransform {

  transform(value: number, convert : string): number {
    switch(convert){
      case 'c-to-f':
        return (value * 9/5) + 32;
      case 'f-to-c':
        return (value - 32) * 5/9;
      case 'c-to-k':
        return value + 273.15;
      case 'k-to-c':
        return value - 273.15;
      case 'f-to-c':
        return (value - 32) * 5/9 + 273.15;
      case 'k-to-f':
        return (value - 273.15) * 9/5 + 32;
      default:
        return value;
    }
  }

}
