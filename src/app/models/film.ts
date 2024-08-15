import { Categorie } from "./categorie";
import { Projection } from "./projection";

export class FilmPost {
    titre: string;
    duree: Date;
    realisateur: string;
    description: string;
    photo             : null;
    dateSortie: null;
    category   : []


    constructor() {
      this.titre: "",
      this.duree: null,
      this.realisateur: "",
      this.description   : "";
      this.photo             : null
      this.dateSortie     : null;
      this.category   : []
    }
}
