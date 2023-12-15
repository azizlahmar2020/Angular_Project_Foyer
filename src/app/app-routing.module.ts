import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionBlocModule } from './gestion-bloc/gestion-bloc.module';
import { GestionChambreModule } from './gestion-chambre/gestion-chambre.module';

const routes: Routes = [

  { path: 'gestion-chambre', loadChildren: () => import('./gestion-chambre/gestion-chambre.module').then(m => m.GestionChambreModule) },


  { path: 'gestion-bloc', loadChildren: () => import('./gestion-bloc/gestion-bloc.module').then(m => m.GestionBlocModule) },






];

@NgModule({
  imports: [RouterModule.forRoot(routes),GestionBlocModule,GestionChambreModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
