import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      nom: ['', Validators.required],
      nombreSalle: ['', Validators.required],
      longitude: ['', Validators.required],
      latitute: ['', Validators.required],
      altitude: ['', Validators.required],
      ville: ['', Validators.required],
  })

    this.getVille();
  }

  getVille() {
    this.villeService.getAllVille().subscribe(
      (data)=>{
      this.villes = data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error")
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
