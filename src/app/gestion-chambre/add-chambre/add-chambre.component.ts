import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChambreService } from 'src/app/services/chambre.service';
import { TypeChambre } from 'src/app/model/typeChambre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.scss'],
})
export class AddChambreComponent {
  addCh: FormGroup;
  typeChambre = TypeChambre;

  constructor(private fb: FormBuilder, private chService: ChambreService , private router:Router) {
    this.addCh = this.fb.group({
      numeroChambre: ['', Validators.required],

      typeC: ['', Validators.required], // Initialisez à null
    });
  }

  onSubmit() {
    if (this.addCh.valid) {
      const ch = this.addCh.value;
      this.chService.addChambre(ch).subscribe((data) => {
        console.log(data);
        alert('Chambre ajoutée avec succès');
        this.router.navigate(['/gestion-chambre/allch']);

      });
    }
  }
}
