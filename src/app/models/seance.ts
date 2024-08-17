import { Film } from "./film";



export class Seance {
  id: number;
  date: Date;
  prix:number;
  heureDebut: Date;
  film: Film

  constructor(){
    this.id = 0;
    this.date = new Date();
    this.prix = 0;
    this.heureDebut = new Date();
    this.film = new Film();
  }
}
