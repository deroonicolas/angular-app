import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produit } from '../../produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css'],
})
export class ListeProduitsComponent {
  @Input() listeProduits!: Produit[];

  @Output() ajouterAuPanierEvt = new EventEmitter<number>();

  ajouterAuPanier(id: number) {
    this.ajouterAuPanierEvt.emit(id);
  }
}
