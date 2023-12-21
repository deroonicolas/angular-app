import { Component, Input } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css',
})
export class PanierComponent {
  @Input() panier!: Produit[];

  totalPanier() {
    return this.panier.reduce((previous, current) => {
      return previous + current.prix;
    }, 0);
  }
}
