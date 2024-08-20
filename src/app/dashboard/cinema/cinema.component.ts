import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/models/cinema';
import { Ville } from 'src/app/models/ville';
import { CinemaService } from 'src/app/service/cinema.service';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit{
  cinemas!:Cinema[];
  villes!: Ville[];
  cinema: Cinema | undefined;

  constructor(
    private service: CinemaService,
    private villeService: VilleService) { }
  ngOnInit() {
    this.getCinema();
    this.getVille();
  }

  getVille() {
    this.villeService.getAllVille().subscribe(
      (data)=>{
      this.villes = data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error")
    });

  }


  getCinema(){
    this.service.getAllCinema().subscribe(
      (data)=>{
      this.cinemas=data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error", error)
    });
  }

  deleteCinema(id:number){
    this.cinemas = this.cinemas.filter(obj=> obj.id !== id);
    this.service.deleteCinema(id).subscribe((data)=>{
      console.log(data);
    },
    (error)=>{
      console.log("error", error)
    });
  }

  getVilleName(id: number): string {

    const ville = this.villes.find(v => v.id === id);console.log(id,ville);
    return ville ? ville.nom : 'Ville inconnue';
  }
}
