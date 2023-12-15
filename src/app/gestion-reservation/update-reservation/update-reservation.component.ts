import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservations } from 'src/app/model/Reservations';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss']
})
export class UpdateReservationComponent implements OnInit {
  reservation!: Reservations;
  id!:number;

  constructor(
    private sReservation: ReservationsService,
    private ac: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id=this.ac.snapshot.paramMap.has('id')?+this.ac.snapshot.paramMap.get('id')!:0;
    // Use paramMap to handle async route parameters
    this.ac.paramMap.subscribe(params => {
     
      console.log('ID from ActivatedRoute:', this.id);
  
      // Only fetch the reservation if id is available
      if (this.id) {
        this.sReservation.getReservationById(this.id).subscribe(data => {
          this.reservation = data;
          console.log('Reservation:', this.reservation);
        });
      }
    });
  }
  
  updateReservation() {
    console.log('ID for Update:', this.id);
  
    // Check if id is available before updating
    if (this.id) {
      this.sReservation.updateReservation(this.reservation).subscribe(
        updatedReservation => {
          console.log('Reservation updated:', updatedReservation);
  
          // Use the updated id from the server response
          this.router.navigate(['/update', { id: updatedReservation.idReservation }]);
        },
        error => {
          console.error('Error updating reservation:', error);
        }
      );
    }
  }
  
  
}
