import { Chambre } from 'src/app/model/Chambre';
export class Reservations {
  idReservation!: number;
  anneeUniversite!:Date;
  estValide!:boolean;
  commentaire!:string;
chambre!:Chambre;
}
