import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desocupado'
})
export class DesocupadoPipe implements PipeTransform {

  transform(value: string) {
    if(value === '-'){
      return 'desocupado'
    }else{
      return value
    }
  }

}
