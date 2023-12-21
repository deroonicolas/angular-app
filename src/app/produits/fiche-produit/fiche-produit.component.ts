import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produit } from '../../produit';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css'],
})
export class FicheProduitComponent {
  @Input() produit!: Produit;

  @Output() ajouterAuPanierEvt = new EventEmitter<number>();

  ajouterAuPanier() {
    this.ajouterAuPanierEvt.emit(this.produit.id);
  }
}
