import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/service/film.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostFilmComponent implements OnInit{
  postFilmForm: FormGroup | any
  films!: Film[];
  myDate: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: FilmService,
    // public dialogRef: MatDialogRef<PostFilmComponent>
  ) {}

  ngOnInit(){
    this.postFilmForm = this.fb.group({
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

  // onSubmit() {
  //   console.log(this.postFilmForm.value);
  //   this.dialogRef.close();
  // }

  // onCancel() {
  //   this.dialogRef.close();
  // }

  postFilm(){
    this.service.postFilm(this.postFilmForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigateByUrl("/categorie");
      }
    })
  }

}
