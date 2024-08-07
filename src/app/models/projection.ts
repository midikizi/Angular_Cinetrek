import { Film } from "./film";
import { Salle } from "./salle";
import { Seance } from "./seance";
import { Ticket } from "./ticket";

export class Projection {
  id: number;
  date: Date;
  prix: number;
  heureDebut:Date;
  film:Film;
  
  constructor(){
    this.id = 0;
    this.date = new Date();
    this.prix = 0;
    this.heureDebut= new Date();
    this.film= new Film;
  }
}
