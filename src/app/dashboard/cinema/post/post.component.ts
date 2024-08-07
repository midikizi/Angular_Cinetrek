import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Cinema } from 'src/app/models/cinema';
import { Ville } from 'src/app/models/ville';
import { CinemaService } from 'src/app/service/cinema.service';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostCinemaComponent implements OnInit{

  postCinemaForm:FormGroup|any
  cinemas!: Cinema[];
  villes!: Ville[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: CinemaService,
    private villeService: VilleService
  ){}

  ngOnInit(){
    this.postCinemaForm = this.fb.group({
      name: ['', Validators.required],
      nombreSalle: ['', Validators.required],
      latitute: ['', Validators.required],
      longitude: ['', Validators.required],
      altitude: ['', Validators.required],
  })
    this.getVille();
  }

  getVille() {
    this.villeService.getAllVille().subscribe((data: Ville[])=>{
      this.villes = data;
      console.log(data);
    },
    (error)=>{
      console.log("error",error)
    });
  }

  postCinema(){
    console.log(this.postCinemaForm?.value);
    this.service.postCinema(this.postCinemaForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigate(['/home/cinema']);
      }
    })
  }

}
