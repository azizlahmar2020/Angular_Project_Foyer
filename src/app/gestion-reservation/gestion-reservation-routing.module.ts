import { ShowReservationComponent } from './show-reservation/show-reservation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteReservationComponent } from './delete-reservation/delete-reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { DetailReservationComponent } from './detail-reservation/detail-reservation.component';
import { DashreservationComponent } from './dashreservation/dashreservation.component';

const routes: Routes = [
  {
    path: '',
    component: DashreservationComponent,
    children: [
      { path: 'addRes', component: AddReservationComponent },
      { path: 'allres', component: ShowReservationComponent },
      {
        path: 'detailRes/:idReservation',
        component: DetailReservationComponent,
      },
      {
        path: 'updateRes/:idReservation',
        component: UpdateReservationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionReservationRoutingModule {}
