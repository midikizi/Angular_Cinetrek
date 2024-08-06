import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  postCategorieForm: FormGroup | any
  categories!:Categorie[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: CategorieService
  ){}

  ngOnInit(){
    this.postCategorieForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  postCategorie(){
    console.log(this.postCategorieForm?.value);
    this.service.postCategorie(this.postCategorieForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigateByUrl("/categorie");
      }
    })
  }

}
