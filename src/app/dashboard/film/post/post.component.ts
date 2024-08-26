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
      photo: ['', Validators.required],
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
    const formData = new FormData();

    console.log(this.postFilmForm.value)
    formData.append('photo', this.postFilmForm.value.photo);
    formData.append('titre', this.postFilmForm.value.titre);
    formData.append('description', this.postFilmForm.value.description);
    formData.append('realisateur', this.postFilmForm.value.realisateur);
    formData.append('dateSortie', this.postFilmForm.value.dateSortie);
    formData.append('duree', this.postFilmForm.value.duree);
    formData.append('category', this.postFilmForm.value.category);

    formData.forEach(
      (value, key) => console.log(key, value)
    )
    this.service.postFilm(formData).subscribe((res)=>{
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
