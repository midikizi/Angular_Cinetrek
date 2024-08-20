
export class Film {
    id:number
    titre: string;
    duree: Date;
    realisateur: string;
    description: string;
    photo:String;
    dateSortie: Date;
    category: number;


    constructor() {
      this.id = 0;
      this.titre = "";
      this.duree = new Date();
      this.realisateur = "";
      this.description = "";
      this.photo = "";
      this.dateSortie = new Date();
      this.category = 0;
    }
}
