import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaut',
})
export class DefautPipe implements PipeTransform {
  transform(valeur: string, defaut: string): string {
    return valeur ? valeur : defaut;
  }
}
