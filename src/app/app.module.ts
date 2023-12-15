import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddfoyerComponent } from './gestion-foyer/add-foyer/add-foyer.component';
import { ShowfoyerComponent } from './gestion-foyer/show-foyer/show-foyer.component';
import { DetailfoyerComponent } from './gestion-foyer/detail-foyer/detail-foyer.component';
import { UpdateFoyerComponent } from './gestion-foyer/update-foyer/update-foyer.component';
import { DeletefoyerComponent } from './gestion-foyer/delete-foyer/delete-foyer.component';
import { AdduniversiteComponent } from './gestion-universite/add-universite/add-universite.component';
import { ShowuniversiteComponent } from './gestion-universite/show-universite/show-universite.component';
import { UpdateuniversiteComponent } from './gestion-universite/update-universite/update-universite.component';
import { DeleteuniversiteComponent } from './gestion-universite/delete-universite/delete-universite.component';
import { DetailuniversiteComponent } from './gestion-universite/detail-universite/detail-universite.component';
import { AddfeedbackComponent } from './gestion-feedback/add-feedback/add-feedback.component';
import { ShowfeedbackComponent } from './gestion-feedback/show-feedback/show-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    AddfoyerComponent,
    ShowfoyerComponent,
    DetailfoyerComponent,
    UpdateFoyerComponent,
    DeletefoyerComponent,
    AdduniversiteComponent,
    ShowuniversiteComponent,
    UpdateuniversiteComponent,
    DeleteuniversiteComponent,
    DetailuniversiteComponent,
    AddfeedbackComponent,
    ShowfeedbackComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
