import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss']
})
export class UpdateReservationComponent {
  reservation:any;
  idReservation:any;
  constructor(private sReservation:ReservationsService, private ac:ActivatedRoute) {
    this.idReservation = this.ac.snapshot.params['idReservation'];

  }
  ngOnInit() {
    this.sReservation.getReservationById(this.idReservation).subscribe(data => {
      this.reservation = data;
      console.log(this.reservation);
    });
  }
  updateReservation() {
    this.sReservation.updateReservation(this.idReservation,this.reservation).subscribe();
  console.log(this.reservation);}


}
