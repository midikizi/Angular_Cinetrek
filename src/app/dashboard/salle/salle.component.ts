import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/models/cinema';
import { Salle } from 'src/app/models/salle';
import { CinemaService } from 'src/app/service/cinema.service';
import { SalleService } from 'src/app/service/salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit{
  Salles!: Salle[];
  cinemas: Cinema[] = [];


  constructor(private service: SalleService,private serviceCin: CinemaService,){}

  ngOnInit(){
    this.getSalle();
    this.getCinema();
  }

  getCinema(){
    this.serviceCin.getAllCinema().subscribe(
      (data)=>{
      this.cinemas=data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error", error)
    });
  }

  getSalle() {
    this.service.getAllSalle().subscribe(
      (data)=>{
      this.Salles = data.results;
      console.log(data.results);
    },(error)=>{console.log("error",error)});
  }

  deleteSalle(id:number){
    this.Salles = this.Salles.filter(obj=> obj.id !== id);
    this.service.deleteSalle(id).subscribe((data)=>{
      console.log(data);
    },(error)=>{
      console.log("error",error);
    });
  }

  getCinName(id: number): string {
    const cat = this.cinemas.find(v => v.id === id);console.log(id,cat);
    return cat ? cat.nom : 'Catégorie inconnue';
  }

}
