import { Cinema } from "./cinema";
import { Place } from "./place";
import { Projection } from "./projection";

export class Salle {
  id: number;
  nom: string;
  nombrePlace: number;
  cinema: number; // Remplace @ManyToOne
  places: Place; // Remplace @OneToMany

  constructor(){
    this.id = 0;
    this.nom = '';
    this.nombrePlace = 0;
    this.cinema = 0;
    this.places = new Place;
  }
}
