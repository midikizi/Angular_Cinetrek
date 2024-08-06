import { Cinema } from "./cinema";
import { Place } from "./place";
import { Projection } from "./projection";

export class Salle {
  id: number;
  name: string;
  nombrePlace: number;
  cinema: Cinema; // Remplace @ManyToOne
  places: Place[]; // Remplace @OneToMany
  projections: Projection[];

  constructor(){
    this.id = 0;
    this.name = '';
    this.nombrePlace = 0;
    this.cinema = new Cinema();
    this.places = [];
    this.projections = [];
  }
}
