import { Salle } from "./salle";
import { Ticket } from "./ticket";

export class Place {
  id: number;
  numero: number;
  prix : number;
  reservee: boolean;
  libre: boolean;

  constructor(){
    this.id = 0;
    this.numero = 0;
    this.prix = 0;
    this.reservee = false;
    this.libre = false;
  }
}
