import { Component } from '@angular/core';
import { ReservationsService } from 'src/app/services/reservations.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-reservation',
  templateUrl: './delete-reservation.component.html',
  styleUrls: ['./delete-reservation.component.scss']
})
export class DeleteReservationComponent {

  constructor(
    private sReservation: ReservationsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  deleteReservation(reservationId: number) {
    this.sReservation.deleteReservationById(reservationId).subscribe(() => {
      // Display an alert message after successful deletion
      alert('Reservation deleted successfully');
      // Redirect to the list of reservations or any other desired page
      this.router.navigate(['/gestion-reservation']);
    });
  }
}
