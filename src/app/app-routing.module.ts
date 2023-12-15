import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowuniversiteComponent } from './gestion-universite/show-universite/show-universite.component';
import { ShowfoyerComponent } from './gestion-foyer/show-foyer/show-foyer.component';


const routes: Routes = [
{path: 'gestion-foyer', loadChildren: () => import('./gestion-foyer/gestion-foyer.module').then(m => m.GestionfoyerModule)},
{path: 'gestion-universite', loadChildren: () => import('./gestion-universite/gestion-universite.module').then(m => m.GestionuniversiteModule)},
{path: 'gestion-universite/allun',component:ShowuniversiteComponent},
{path: 'gestion-universite/allfoy',component:ShowfoyerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
