import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/service/film.service';
import { MatDialog } from '@angular/material/dialog';
import { PostFilmComponent } from './post/post.component';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit{

  films!: Film[];
  categorie: Film | any;

  constructor(private service:FilmService,
    // public dialog: MatDialog
  ){}

  ngOnInit() {
    this.getFilm();
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(PostFilmComponent, {
  //     width: '250px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

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

  deleteFilm(id:number){
    this.service.deleteFilm(id).subscribe((data)=>{
      console.log(data);
      this.getFilm();
    },(error)=>{
      console.log("error");
    });
  }

}
