import { universiteService } from './../../services/universite.service';
import { foyer } from './../../model/foyer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { foyerService } from 'src/app/services/foyer.service';
import { universite } from 'src/app/model/universite';


@Component({
  selector: 'app-detail-foyer',
  templateUrl: './detail-foyer.component.html',
  styleUrls: ['./detail-foyer.component.scss']
})
export class DetailfoyerComponent implements OnInit {
  foyer: any;
  idfoyer:any;
  universites: universite[] = [];
  selecteduniversites!: number;
  constructor(
    private route: ActivatedRoute,
    private sfoyer: foyerService,private router:Router,private foyerService:foyerService
  ) {}
  ngOnInit() {
    this.loadfoyer();
    
  }
  
  addfoyer() {
    this.router.navigate(['/gestion-foyer/addFoy']); // Naviguer vers la page d'ajout
  }
  loadfoyer() {
    this.sfoyer.getfoyer().subscribe((data: any) => {
      this.foyer = data;
    });
}

affecterFoyerAUniversite() {
  console.log('universite'+this.selecteduniversites);
  if (this.foyer && this.foyer.idfoyer && this.selecteduniversites) {
    this.sfoyer. affecterFoyerAUniversite(this.foyer.idfoyer,this.selecteduniversites)
     
  } else {
    console.error("Veuillez sélectionner un foyer et assurez-vous que le universite est correctement défini.");
  }
}

desaffecterFoyerAUniversite() {
  console.log('universite' + this.selecteduniversites);
  if (this.foyer && this.foyer.idfoyer) {
    this.sfoyer. desaffecterFoyerAUniversite(this.foyer.idfoyer)
  } else {
    console.error("Veuillez sélectionner une réservation.");
  }
}



}
