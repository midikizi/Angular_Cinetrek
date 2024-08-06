import { Film } from "./film";
import { Salle } from "./salle";
import { Seance } from "./seance";
import { Ticket } from "./ticket";

export class Projection {
  id: number;
  dateProjection: Date;
  prix: number;
  salle: Salle; // Remplace @ManyToOne
  film: Film; // Remplace @ManyToOne
  tickets: Ticket[]; // Remplace @OneToMany
  seance: Seance; 

  constructor(){
    this.id = 0;
    this.dateProjection = new Date();
    this.prix = 0;
    this.salle = new Salle();
    this.film = new Film();
    this.tickets = [];
    this.seance = new Seance();
  }
}
