import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowuniversiteComponent } from './gestion-universite/show-universite/show-universite.component';
import { ShowfoyerComponent } from './gestion-foyer/show-foyer/show-foyer.component';
import { ShowfeedbackComponent } from './gestion-feedback/show-feedback/show-feedback.component';


const routes: Routes = [
{path: 'gestion-foyer', loadChildren: () => import('./gestion-foyer/gestion-foyer.module').then(m => m.GestionfoyerModule)},
{path: 'gestion-feedback', loadChildren: () => import('./gestion-feedback/gestion-feedback.module').then(m => m.GestionfeedbackModule)},
{path: 'gestion-universite', loadChildren: () => import('./gestion-universite/gestion-universite.module').then(m => m.GestionuniversiteModule)},
{path: 'gestion-universite/allun',component:ShowuniversiteComponent},
{path: 'gestion-foyer/allfoy',component:ShowfoyerComponent},
{path: 'gestion-feedback/allfed',component:ShowfeedbackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
