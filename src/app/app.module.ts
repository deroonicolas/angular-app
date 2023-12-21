import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FicheProduitComponent } from './produits/fiche-produit/fiche-produit.component';
import { ListeProduitsComponent } from './produits/liste-produits/liste-produits.component';
import { PanierComponent } from './panier/panier.component';

import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { RecherchePipe } from './pipes/recherche.pipe';
import { TailleFichierPipe } from './pipes/taille-fichier.pipe';
import { DefautPipe } from './pipes/defaut-fichier.pipe';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    FicheProduitComponent,
    ListeProduitsComponent,
    PanierComponent,
    RecherchePipe,
    TailleFichierPipe,
    DefautPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'EUR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
