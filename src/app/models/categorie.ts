import { Film } from './film';

export class Categorie {
  id: number;
  name: string;
  description: string;
  films:Film [];

  constructor(){
    this.id = 0;
    this.name = '';
    this.description = '';
    this.films = [];
  }
}
