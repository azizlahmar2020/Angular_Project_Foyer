import { Chambre } from 'src/app/model/Chambre';
import { Bloc } from './../../model/Bloc';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeChambre } from 'src/app/model/typeChambre';
import { ChambreService } from 'src/app/services/chambre.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-chambre',
  templateUrl: './show-chambre.component.html',
  styleUrls: ['./show-chambre.component.scss'],
})
export class ShowChambreComponent implements OnInit {
  chambres: any[] = [];
  bloc:Bloc=new Bloc();
  searchTerm: string = '';


  constructor(
    private sChambre: ChambreService,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.sChambre.getAllChambre().subscribe((data: any) => {
      console.log(data);
      this.chambres = data;
    });
  }
  showDetails(idChambre: any) {
    this.router.navigate(['/gestion-chambre/detailCh', idChambre]);
  }
  editCh(idChambre: any) {
    this.router.navigate(['/gestion-chambre/updateCh', idChambre]);

  }
  deleteCh(ch: Chambre) {
    this.sChambre.deleteChambre(ch).subscribe((data) => {
      console.log(data);
      alert('Chambre supprimée avec succès');
      this.router.navigate(['/gestion-chambre/allch']);
      window.location.reload();
    });
  }
  addChambre() {
    this.router.navigate(['/gestion-chambre/addch']); // Naviguer vers la page d'ajout
  }

  get filteredChambres() {
    return this.chambres.filter((chambre) =>
      chambre.idChambre.toString().includes(this.searchTerm) ||
      chambre.numeroChambre.toString().includes(this.searchTerm) ||
      (chambre.TypeChambre && chambre.TypeChambre.toString().toLowerCase().includes(this.searchTerm.toLowerCase()))||
      (chambre.bloc && chambre.bloc.idBloc.toString().toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
  }


}
