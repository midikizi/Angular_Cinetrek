import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Film } from 'src/app/models/film';
import { CategorieService } from 'src/app/service/categorie.service';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateFilmComponent implements OnInit{
  updateFilmForm: FormGroup | any
  id: number = this.activatedRoute.snapshot.params["id"];
  categories!: Categorie[];
  films!: Film[];

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: FilmService,
    private router: Router,
    private serviceCategorie: CategorieService,) { }

  ngOnInit(){
    this.updateFilmForm = this.fb.group({
      titre:['', Validators.required],
      description:['', Validators.required],
      realisateur:['', Validators.required],
      dateSortie: ['', Validators.required],
      duree: ['', Validators.required],
      photo: ['', Validators.required],
      category: ['', Validators.required],
    })

    this.getCategorie();
    this.getFilmById();
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

  getFilmById(){
    this.service.getById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateFilmForm.patchValue(res);
    })
  }


  updateFilm(){
    console.log(this.updateFilmForm.value);
    this.service.updateFilm(this.id,this.updateFilmForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigate(['/home/film']);
      }
    });
  }

  onfileChange(event: any){
    this.updateFilmForm.value.photo = event.target.files[0];
}

  deleteFilm(id:number){
    this.films = this.films.filter(obj=> obj.id !== id);
    this.service.deleteFilm(id).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/home/film']);
    },(error)=>{
      console.log("error");
    });
  }
}
