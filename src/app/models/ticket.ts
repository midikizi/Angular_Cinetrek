import { Place } from "./place";
import { Projection } from "./projection";
import { Salle } from "./salle";

export class Ticket {
  id: number;
  nomClient: string;
  prix: number;
  codePayement: string;
  salle: Salle;
  place: Place;

  constructor(){
    this.id = 0;
    this.nomClient = '';
    this.prix = 0;
    this.codePayement = '';
    this.salle = new Salle();
    this.place = new Place();
  }
}
