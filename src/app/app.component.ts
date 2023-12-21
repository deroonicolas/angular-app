import { Component } from '@angular/core';
import { Produit } from './produit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  panier: Produit[] = [];
  produits = [
    {
      id: 1,
      designation: 'Ruban adhésif transparent',
      prix: 1.49,
      imgUrl:
        'https://cdn.pixabay.com/photo/2013/07/13/12/14/adhesive-tape-159446_960_720.png',
    },
    {
      id: 2,
      designation: 'Carnet de Post-it',
      prix: 2.99,
      imgUrl:
        'https://cdn.pixabay.com/photo/2018/02/20/10/53/yellow-3167343_960_720.png',
    },
    {
      id: 3,
      designation: 'Taille-crayon',
      prix: 0.99,
      imgUrl:
        'https://cdn.pixabay.com/photo/2013/07/13/12/13/pencil-sharpener-159427_960_720.png',
    },
    {
      id: 4,
      designation: 'Agrafeuse de bureau',
      prix: 6.99,
      imgUrl:
        'https://cdn.pixabay.com/photo/2012/04/01/17/25/stapler-23635_1280.png',
    },
    {
      id: 5,
      designation: 'Stylo-plume',
      prix: 8.99,
      imgUrl:
        'https://cdn.pixabay.com/photo/2012/04/13/18/44/pen-33237_1280.png',
    },
  ];
  mettreAJourPanier(id: number) {
    const produit = this.produits.find((produit) => {
      return produit.id === id;
    });
    produit && this.panier.push(produit);
  }
  titres = [
    'L’actualité générale en 2023 : ce qu’il faut savoir',
    'Les outils de collaboration pour les équipes de cinéma',
    'Les meilleures recettes de cuisine pour l’été',
    'Les compétences essentielles pour devenir un expert en histoire',
    'Comment réussir votre carrière en développement informatique',
    'Les tendances du développement web pour l’année 2023',
    'Les meilleures pratiques de développement en 2023',
    'Les meilleurs films de science-fiction de tous les temps',
    'Les bonnes pratiques pour préserver l’environnement',
    'Les avantages du développement avec Node.js',
  ];
  chansons = [
    {
      titre: 'La Vie en Rose',
      interprete: 'Edith Piaf',
      taille: 2652897,
    },
    {
      titre: 'Le Poinçonneur des Lilas',
      interprete: 'Serge Gainsbourg',
      taille: 1950259,
    },
    {
      titre: 'La Mauvaise Réputation',
      interprete: 'Georges Brassens',
      taille: 2754729,
    },
  ];
  utilisateurs = [
    {
      pseudo: 'C@mille',
      age: 23,
      avatar: 'https://i.pravatar.cc/400?img=48',
    },
    {
      pseudo: 'AyCaramba23',
      age: 56,
      avatar: '',
    },
    {
      pseudo: 'ΩmegaXY',
      age: 44,
      avatar: 'https://i.pravatar.cc/400?img=6',
    },
  ];
  avatarDefaut = 'https://i.pravatar.cc/400?img=12';
}
