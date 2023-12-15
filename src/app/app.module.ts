// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { TransparentNavbarComponent } from './transparent-navbar/transparent-navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { GestionReservationModule } from './gestion-reservation/gestion-reservation.module'; // Import the module

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TransparentNavbarComponent,
    HomePageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GestionReservationModule, // Import the module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
