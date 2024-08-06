import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from './../../service/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{
  categories!: Categorie[];
  categorie: Categorie | undefined ;

  constructor(
    private service: CategorieService,){}

  ngOnInit() {
    this.getCategorie();
  }

  getCategorie(){
    this.service.getAllCategorie().subscribe((data:Categorie[])=>{
      this.categories=data;
      console.log(data);
    },
    (error)=>{
      console.log("error", error)
    });
  }

  deleteCategorie(id:number){
    this.service.deleteCategorie(id).subscribe((data)=>{
      console.log(data);
      this.getCategorie();
    },
    (error)=>{
      console.log("error")
    });
  }

}