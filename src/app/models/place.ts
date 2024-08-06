import { Salle } from "./salle";
import { Ticket } from "./ticket";

export class Place {
  id: number;
  numero: number;
  prix : number;
  salle: Salle;
  tickets: Ticket[];

  constructor(){
    this.id = 0;
    this.numero = 0;
    this.prix = 0;
    this.salle = new Salle();
    this.tickets = [];
  }
}
