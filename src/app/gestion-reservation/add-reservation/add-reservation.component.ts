import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent {
  addRes: FormGroup;


  constructor(private fb: FormBuilder, private sReservation: ReservationsService) {
    this.addRes = this.fb.group({
      idReservation: ['', Validators.required],
      anneeUniversite: ['', Validators.required],
      estValide: [false], // Utilisez estValide au lieu de estValid
      commentaire: ['', Validators.required]
    });

  }

  
onSubmit() {
  if (this.addRes.valid) {
    const reservation = this.addRes.value;
    console.log(reservation); // Vérifiez la valeur de estValid ici
    this.sReservation.addReservation(reservation).subscribe((data) => {
      console.log(data);
      alert('reservation ajoutée avec succès');
    });
  }
}

}
