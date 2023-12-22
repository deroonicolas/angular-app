import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { ListeProduitsComponent } from './produits/liste-produits/liste-produits.component';

const routes: Routes = [
  {
    path: 'panier',
    component: PanierComponent,
  },
  {
    path: 'catalogue',
    component: ListeProduitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
