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
  ville: number;

  constructor() {
    this.id = 0;
    this.nom = '';
    this.nombreSalle = 0;
    this.longitude = 0;
    this.latitute = 0;
    this.altitude = 0;
    this.ville = 0;
  }
}
