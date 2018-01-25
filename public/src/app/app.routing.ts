import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { ContatoComponent } from './contato/contato.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'localizacao', component: LocalizacaoComponent },
  { path: 'contato', component: ContatoComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
