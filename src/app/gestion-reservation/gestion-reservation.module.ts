import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionReservationRoutingModule } from './gestion-reservation-routing.module';
import { DashreservationComponent } from './dashreservation/dashreservation.component';


@NgModule({
  declarations: [
    DashreservationComponent
  ],
  imports: [
    CommonModule,
    GestionReservationRoutingModule
  ]
})
export class GestionReservationModule { }
