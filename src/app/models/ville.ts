import { Cinema } from "./cinema";

export class Ville {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
  altitude: number;
  cinema: Cinema[]; // Assuming Cinema is another class defined elsewhere

  constructor(){
    this.id = 0;
    this.name = '';
    this.longitude = 0;
    this.latitude = 0;
    this.altitude = 0;
    this.cinema = [];
  }
}
