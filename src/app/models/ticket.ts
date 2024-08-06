import { Place } from "./place";
import { Projection } from "./projection";

export class Ticket {
  id: number;
  nomClient: string;
  prix: number;
  codePayement: string;
  reserve: boolean;
  place: Place;
  projection: Projection;

  constructor(){
    this.id = 0;
    this.nomClient = '';
    this.prix = 0;
    this.codePayement = '';
    this.reserve = false;
    this.place = new Place();
    this.projection = new Projection();
  }
}
