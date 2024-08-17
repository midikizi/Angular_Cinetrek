
export class Projection {
  id: number;
  date: Date;
  prix: number;
  heureDebut:Date;

  constructor(){
    this.id = 0;
    this.date = new Date();
    this.prix = 0;
    this.heureDebut= new Date();
  }
}
