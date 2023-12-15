import { Chambre } from 'src/app/model/Chambre';
import { ReservationsService } from 'src/app/services/reservations.service';
import { Reservations } from '../../model/Reservations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.scss'],
})
export class ShowReservationComponent implements OnInit {
  reservations: any[] = [];
  searchTerm: string = '';


  constructor(
    private sReservation: ReservationsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.sReservation.getAllReservations().subscribe((data: any) => {
      console.log(data);
      this.reservations = data;
    });
  }
  addReservation() {
    this.router.navigate(['/gestion-reservation/addRes']); // Naviguer vers la page d'ajout
  }
  showDetails(idReservation: any) {
    this.router.navigate(['/gestion-reservation/detailRes', idReservation]);
  }

  deleteReservation(resv: Reservations) {
    this.sReservation.deleteReservation(resv).subscribe((data) => {
      console.log(data);
    });
  }
  editReservation(idReservation: any) {
    this.router.navigate(['/gestion-reservation/updateRes', idReservation]);
  }

  get filteredReservations() {
    return this.reservations.filter(
      (reservation) =>
        reservation.idReservation.toString().includes(this.searchTerm) ||
        reservation.anneeUniversite.toString().includes(this.searchTerm) ||
        reservation.commentaire
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())||
          (reservation.chambre && reservation.chambre.numeroChambre.toString().includes(this.searchTerm))
    );
  }
}
