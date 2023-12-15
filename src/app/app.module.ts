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
import { NavbarComponent } from './navbar/navbar.component';

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
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
