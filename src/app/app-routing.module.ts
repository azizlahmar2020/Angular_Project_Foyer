import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionReservationModule } from './gestion-reservation/gestion-reservation.module';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [


{path: 'gestion-reservation', loadChildren: () => import('./gestion-reservation/gestion-reservation.module').then(m => m.GestionReservationModule)},
{
  path:'registry',component:RegisterComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),GestionReservationModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
