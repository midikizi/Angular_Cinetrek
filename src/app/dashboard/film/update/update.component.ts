import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateFilmComponent implements OnInit{
  updateFilmForm: FormGroup | any
  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: FilmService,
    private router: Router) { }

  ngOnInit(){
    this.getCategorieById();
    this.updateFilmForm = this.fb.group({
      titre:['', Validators.required],
      description:['', Validators.required],
      realisateur:['', Validators.required],
      dateSortie: ['', Validators.required],
      duree: ['', Validators.required],
      photo: ['', Validators.required],
      projections: ['', Validators.required],
      categorie: ['', Validators.required],
    })
  }

  getCategorieById(){
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
        this.router.navigateByUrl("/film");
      }
    });
  }

  
}
