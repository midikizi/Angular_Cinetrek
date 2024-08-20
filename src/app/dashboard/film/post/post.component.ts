import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Film } from 'src/app/models/film';
import { CategorieService } from 'src/app/service/categorie.service';
import { FilmService } from 'src/app/service/film.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostFilmComponent implements OnInit{
  postFilmForm: FormGroup | any
  myDate: any;
  categories!: Categorie[]
  films!: Film[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: FilmService,
    private serviceCategorie: CategorieService,
  ) {}

  ngOnInit(){
    this.postFilmForm = this.fb.group({
      titre:['', Validators.required],
      description:['', Validators.required],
      realisateur:['', Validators.required],
      dateSortie: ['', Validators.required],
      duree: ['', Validators.required],
      photo: [null, Validators.required],
      category: ['', Validators.required],
    })
    this.getCategorie();
  }

  getCategorie(){
    this.serviceCategorie.getAllCategorie().subscribe(
      (data)=>{
      this.categories=data.results;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error)
    });
  }

  postFilm(){
    console.log(this.postFilmForm.value)
    this.service.postFilm(this.postFilmForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigate(['/home/film']);
      }
    })
  }

  onfileChange(event: any){
      this.postFilmForm.value.photo = event.target.files[0];
  }

  
}
