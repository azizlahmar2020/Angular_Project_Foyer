import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.scss']
})
export class UpdateChambreComponent {
ch:any;
idChambre:any;
constructor(private sChambre:ChambreService, private ac:ActivatedRoute, private route:Router) {
  this.idChambre = this.ac.snapshot.params['idChambre'];

}
ngOnInit() {
  this.sChambre.getChambreById(this.idChambre).subscribe(data => {
    this.ch = data;
  });
}
update() {
  this.sChambre.updateChambre(this.idChambre,this.ch).subscribe();
console.log(this.ch);
  this.route.navigate(['/gestion-chambre/allch']);

}
}
