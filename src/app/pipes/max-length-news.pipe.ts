import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLengthNews'
})
export class MaxLengthNewsPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 35) {
      return  "..."+value.substr(35) ;
    } else {
      return value;
    }

  }

}
