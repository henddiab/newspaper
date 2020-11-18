import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filterText, propName): any {
    let searcResult = (filterText) ?
      value.filter(item =>
        item[propName].toLowerCase().includes(filterText.toLowerCase())) :
      value;
    return searcResult;
  }

}
