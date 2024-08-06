import { Categorie } from "./categorie";
import { Projection } from "./projection";

export class Film {
    id: number;
    titre: string;
    description: string;
    realisateur: string;
    dateSortie: Date;
    duree: number;
    photo: string;
    projections: Projection [];
    categorie: Categorie;

    constructor() {
        this.id = 0;
        this.titre = '';
        this.description = '';
        this.realisateur = '';
        this.dateSortie = new Date();
        this.duree = 0;
        this.photo = '';
        this.projections = [];
        this.categorie = new Categorie();
    } 
}
