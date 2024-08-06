import { Salle } from "./salle";
import { Ville } from "./ville";

export class Cinema {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
  altitude : number;
  nombreSalle: number;
  salles: Salle[];
  ville: Ville;

  constructor() {
    this.id = 0;
    this.name = '';
    this.longitude = 0;
    this.latitude = 0;
    this.altitude = 0;
    this.nombreSalle = 0;
    this.salles = [];
    this.ville = new Ville();
  }
}
