import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'constrasena'
})
export class ConstrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
    return (activar) ? '*'.repeat(value.length) : value;
  }

}
