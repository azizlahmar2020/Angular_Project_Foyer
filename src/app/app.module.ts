import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule } from '@angular/forms';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { UniversiteDashboardComponent } from './universite-dashboard/universite-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { AddUserComponent } from './gestion-utilisateur/add-user/add-user.component';
import { ShowUserComponent } from './gestion-utilisateur/show-user/show-user.component';
import { UpdateUserComponent } from './gestion-utilisateur/update-user/update-user.component';
import { DeleteUserComponent } from './gestion-utilisateur/delete-user/delete-user.component';
import { DetailUserComponent } from './gestion-utilisateur/detail-user/detail-user.component';
import { DetailReservationComponent } from './gestion-reservation/detail-reservation/detail-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AuthenticationComponent,
    StudentDashboardComponent,
    UniversiteDashboardComponent,
    AdminDashboardComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CheckEmailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
