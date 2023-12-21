import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recherche',
})
export class RecherchePipe implements PipeTransform {
  transform(chaines: string[], termeRecherche: string) {
    if (!chaines || !termeRecherche) {
      return chaines;
    }

    termeRecherche = termeRecherche.toLowerCase();

    return chaines.filter((chaine) => {
      return chaine.toLowerCase().includes(termeRecherche);
    });
  }
}
