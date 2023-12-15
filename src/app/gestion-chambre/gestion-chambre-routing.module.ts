import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { ShowChambreComponent } from './show-chambre/show-chambre.component';
import { DetailChambreComponent } from './detail-chambre/detail-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';
import { DashchambreComponent } from './dashchambre/dashchambre.component';

const routes: Routes = [
 {path:'',component:DashchambreComponent,children:[{
    path: 'addch',
    component: AddChambreComponent,
  },
  {
    path: 'allch',
    component: ShowChambreComponent,
  },
  { path: 'detailCh/:idChambre', component: DetailChambreComponent },
  { path: 'updateCh/:idChambre', component: UpdateChambreComponent },]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionChambreRoutingModule {}
