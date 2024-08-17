
export class Film {
    titre: string;
    duree: Date;
    realisateur: string;
    description: string;
    photo:String;
    dateSortie: Date;
    category: number;


    constructor() {
      this.titre = "";
      this.duree = new Date();
      this.realisateur = "";
      this.description = "";
      this.photo = "";
      this.dateSortie = new Date();
      this.category = 0;
    }
}
