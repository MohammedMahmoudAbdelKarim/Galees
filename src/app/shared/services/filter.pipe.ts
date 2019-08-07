import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(profiles: any, fliterValue?: any): any {
    // console.log(fliterValue.value);

    return profiles.filter(ele => ele['name']);

  }

}
