import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { DashreservationComponent } from './dashreservation/dashreservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ShowReservationComponent } from './show-reservation/show-reservation.component';
import { DetailReservationComponent } from './detail-reservation/detail-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { DeleteReservationComponent } from './delete-reservation/delete-reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: DashreservationComponent },
  { path: 'addRes', component: AddReservationComponent },
  { path: 'allres', component: ShowReservationComponent },
  { path: 'detailRes/:idReservation', component: DetailReservationComponent },
  { path: 'gestion-reservation/updateReservation/:reservationId', component: UpdateReservationComponent }
];

@NgModule({
  declarations: [
    DashreservationComponent,
    AddReservationComponent,
    ShowReservationComponent,
    DetailReservationComponent,
    UpdateReservationComponent,
    DeleteReservationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GestionReservationModule { }
