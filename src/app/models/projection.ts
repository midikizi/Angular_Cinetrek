import { Film } from "./film";

export class Projection {
  id: number;
  date: Date;
  prix: number;
  heureDebut:Date;
  film: number;

  constructor(){
    this.id = 0;
    this.date = new Date();
    this.prix = 0;
    this.heureDebut= new Date();
    this.film = 0;
  }
}
