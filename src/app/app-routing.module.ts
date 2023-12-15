import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionBlocModule } from './gestion-bloc/gestion-bloc.module';
import { GestionChambreModule } from './gestion-chambre/gestion-chambre.module';
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

  { path: 'gestion-chambre', loadChildren: () => import('./gestion-chambre/gestion-chambre.module').then(m => m.GestionChambreModule) },


  { path: 'gestion-bloc', loadChildren: () => import('./gestion-bloc/gestion-bloc.module').then(m => m.GestionBlocModule) },


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
  imports: [RouterModule.forRoot(routes),GestionBlocModule,GestionChambreModule, GestionReservationModule, GestionUserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
