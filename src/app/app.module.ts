import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddReservationComponent } from './gestion-reservation/add-reservation/add-reservation.component';
import { ShowReservationComponent } from './gestion-reservation/show-reservation/show-reservation.component';
import { DetailReservationComponent } from './gestion-reservation/detail-reservation/detail-reservation.component';
import { UpdateReservationComponent } from './gestion-reservation/update-reservation/update-reservation.component';
import { DeleteReservationComponent } from './gestion-reservation/delete-reservation/delete-reservation.component';
import { AddChambreComponent } from './gestion-chambre/add-chambre/add-chambre.component';
import { ShowChambreComponent } from './gestion-chambre/show-chambre/show-chambre.component';
import { UpdateChambreComponent } from './gestion-chambre/update-chambre/update-chambre.component';
import { DeleteChambreComponent } from './gestion-chambre/delete-chambre/delete-chambre.component';
import { DetailChambreComponent } from './gestion-chambre/detail-chambre/detail-chambre.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { Chart } from 'chart.js';

import { AddBlocComponent } from './gestion-bloc/add-bloc/add-bloc.component';

import { AfficherBlocComponent } from './gestion-bloc/afficher-bloc/afficher-bloc.component';
import { RouterModule } from '@angular/router';
import { DeleteBlocComponent } from './gestion-bloc/delete-bloc/delete-bloc.component';
import { ModifyBlocComponent } from './gestion-bloc/modify-bloc/modify-bloc.component';
import { DetailBlocComponent } from './gestion-bloc/detail-bloc/detail-bloc.component';

@NgModule({
  declarations: [
    AppComponent,
    AddReservationComponent,
    ShowReservationComponent,
    DetailReservationComponent,
    UpdateReservationComponent,
    DeleteReservationComponent,
    AddChambreComponent,
    ShowChambreComponent,
    UpdateChambreComponent,
    DeleteChambreComponent,
    DetailChambreComponent,

    AddBlocComponent,

      AfficherBlocComponent,
        DeleteBlocComponent,
        ModifyBlocComponent,
        DetailBlocComponent,


  ],
  imports: [
    BrowserModule,RouterModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
