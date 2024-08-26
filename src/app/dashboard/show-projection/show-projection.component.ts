import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { Projection } from 'src/app/models/projection';
import { FilmService } from 'src/app/service/film.service';
import { ProjectionProjection } from 'src/app/service/projection.service';

@Component({
  selector: 'app-show-projection',
  templateUrl: './show-projection.component.html',
  styleUrls: ['./show-projection.component.css']
})
export class ShowProjectionComponent implements OnInit{
  projections!: Projection[];
  projection : Projection | undefined;
  films!: Film[];
  // tableau = [1,2,2,45,45,758,5,468,765,47657,357,687,35,4787,]

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

  getFilmName(projection: Projection): string {
  const film = this.films.find(f => f.id === projection.id);
  return film ? film.photo : 'Catégorie inconnue';
}

}
