import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit{
  
  films!: Film[];
  categorie: Film | any;

  constructor(private service:FilmService,){}

  ngOnInit() {
    this.getFilm();
  }

  getFilm() {
    this.service.getAllFilm().subscribe(
      (data)=>{
      this.films = data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error",error)
    });
  }

}
