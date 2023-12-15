import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{path: 'gestion-reservation', loadChildren: () => import('./gestion-reservation/gestion-reservation.module').then(m => m.GestionReservationModule)},
{path: 'gestion-chambre', loadChildren: () => import('./gestion-chambre/gestion-chambre.module').then(m => m.GestionChambreModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
