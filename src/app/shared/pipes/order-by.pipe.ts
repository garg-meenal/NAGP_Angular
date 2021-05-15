import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<String>, args: string): Array<String> {
    if (typeof args[0] === "undefined") {
      return array;
  }

  let direction   = args[0][0];
  let column      = args[0].slice(1);

  array.sort((a: any, b: any) => {

      let left    = Number(new Date(a[column]));
      let right   = Number(new Date(b[column]));

      return (direction === "-") ? right - left : left - right;
  });

  return array;
  }

}
