import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionReservationModule } from './gestion-reservation/gestion-reservation.module';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './services/auth/guard.guard';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { UniversiteDashboardComponent } from './universite-dashboard/universite-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { GestionUserModule } from './gestion-utilisateur/gestion-utilisateur.module';


const routes: Routes = [


{path: 'gestion-reservation', loadChildren: () => import('./gestion-reservation/gestion-reservation.module').then(m => m.GestionReservationModule)},
{path: 'gestion-utilisateur', loadChildren: () => import('./gestion-utilisateur/gestion-utilisateur.module').then(m => m.GestionUserModule)},
{path:'registry',component:RegisterComponent},
{path:'login',component:AuthenticationComponent},
{ path: 'etudiant', component: StudentDashboardComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ETUDIANT'] } },
{ path: 'universite', component: UniversiteDashboardComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_UNIVERSITE'] } },
{ path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] } },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'check-email', component: CheckEmailComponent },
{ path: 'reset-password', component: ResetPasswordComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes), GestionReservationModule, GestionUserModule],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
