import { Salle } from "./salle";
import { Ville } from "./ville";

export class Cinema {
  id: number;
  nom: string;
  nombreSalle: number;
  longitude: number;
  latitute: number;
  altitude : number;
  // salles: Salle[];
  // ville: Ville;

  constructor() {
    this.id = 0;
    this.nom = '';
    this.longitude = 0;
    this.latitute = 0;
    this.altitude = 0;
    this.nombreSalle = 0;
    // this.salles = [];
    // this.ville = new Ville();
  }
}
