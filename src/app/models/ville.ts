import { Cinema } from "./cinema";

export class Ville {
  id: number;
  nom: string;
  longitude: number;
  latitute: number;
  altitude: number;

  constructor(){
    this.id = 0;
    this.nom = '';
    this.longitude = 0;
    this.latitute = 0;
    this.altitude = 0;
  }
}
