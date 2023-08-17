import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(value: number, format : string = "short"): string {

    let seconds = value % 60;
    let minutes = Math.floor(value / 60);

    if(format === "short") {
      
      return `${ (minutes < 10) ? '0' : '' }${minutes}:${ (seconds<10) ? '0' : '' }${seconds}`;

    } else if (format === "long") {

      return `${minutes} minute${ (minutes > 1) ? 's' : '' } et ${seconds} seconde${ (seconds > 1) ? 's' : '' }`;

    } else {

      return value.toString();
    }
  }

}

