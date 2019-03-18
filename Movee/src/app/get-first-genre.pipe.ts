import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFirstGenre'
})
export class GetFirstGenrePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
