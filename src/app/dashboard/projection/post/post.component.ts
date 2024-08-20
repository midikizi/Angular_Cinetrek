import { FilmService } from './../../../service/film.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film';
import { Projection } from 'src/app/models/projection';
import { ProjectionProjection } from 'src/app/service/projection.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostProjectionComponent implements OnInit{
  postProjectionForm: FormGroup | any
  projections!: Projection[];
  films!: Film[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: ProjectionProjection,
    private filmService: FilmService){}

  ngOnInit(){
    this.getFilm();
    this.postProjectionForm=this.fb.group({
      date: ['', Validators.required],
      prix: ['', Validators.required],
      heureDebut: ['', Validators.required],
      film: ['', Validators.required],
    })
  }

  getFilm() {
    this.filmService.getAllFilm().subscribe(
      (data)=>{
      this.films = data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error",error)
    });
  }

  postProjection(){
    console.log(this.postProjectionForm?.value);
    this.service.postProjection(this.postProjectionForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigate(['/home/projection']);
      }
    })
  }

}
