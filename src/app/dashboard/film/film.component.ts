import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/service/film.service';
import { MatDialog } from '@angular/material/dialog';
import { PostFilmComponent } from './post/post.component';
import { StockInfoService } from 'src/app/service/stock-info.service';
import { CategorieService } from 'src/app/service/categorie.service';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit{

  films!: Film[];
  categorie: Film | any;
  user!: any;
  categories!: Categorie[];

  constructor(private service:FilmService,
    private stock:StockInfoService,
    private serviceCat: CategorieService){}

  ngOnInit() {
    this.getFilm();
    this.getCategorie();
    this.user = this.stock.getuserinfo()
    console.log(this.user)
  }

  getCategorie(){
    this.serviceCat.getAllCategorie().subscribe(
      (data)=>{
      this.categories=data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error", error)
    });
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

  deleteFilm(id:number){
    this.films = this.films.filter(obj=> obj.id !== id);
    this.service.deleteFilm(id).subscribe((data)=>{
      console.log(data);
    },(error)=>{
      console.log("error");
    });
  }

  getCategorieName(id: number): string {
    const cat = this.categories.find(v => v.id === id);console.log(id,cat);
    return cat ? cat.nom : 'Catégorie inconnue';
  }

}
