import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { Projection } from 'src/app/models/projection';
import { FilmService } from 'src/app/service/film.service';
import { ProjectionProjection } from 'src/app/service/projection.service';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit{
  projections!: Projection[];
  projection : Projection | undefined;
  films!: Film[];

  constructor(private service: ProjectionProjection,private serviceFilm:FilmService,){}

  ngOnInit() {
    this.getProjection();
    this.getFilm();
  }

  getFilm() {
    this.serviceFilm.getAllFilm().subscribe(
      (data)=>{
      this.films = data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error",error)
    });
  }

  getProjection() {
    this.service.getAllProjection().subscribe(
      (data)=>{
      this.projections = data.results;
      console.log(data.results);
    },(error)=>{console.log("error",error)});
  }

  deleteProjection(id:number){
    this.service.deleteProjection(id).subscribe((data)=>{
      console.log(data);
      this.getProjection();
    },(error)=>{
      console.log("error",error);
    });
  }

  getFilmName(id: number): string {
    const cat = this.films.find(v => v.id === id);console.log(id,cat);
    return cat ? cat.titre : 'Catégorie inconnue';
  }
}
