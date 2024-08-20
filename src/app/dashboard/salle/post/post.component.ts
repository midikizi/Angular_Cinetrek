import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/models/cinema';
import { Salle } from 'src/app/models/salle';
import { CinemaService } from 'src/app/service/cinema.service';
import { SalleService } from 'src/app/service/salle.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostSalleComponent implements OnInit{

  postSalleForm: FormGroup | any
  salles!: Salle[];
  cinemas!: Cinema[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: SalleService,
    private cinemaService: CinemaService){}

  ngOnInit(){
    this.postSalleForm=this.fb.group({
      nom: ['', Validators.required],
      nombrePlace: ['', Validators.required],
      cinema: ['', Validators.required],
      places: ['', Validators.required],
    })
    this.getCinema();
  }

  getCinema(){
    this.cinemaService.getAllCinema().subscribe(
      (data)=>{
      this.cinemas=data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error", error)
    });
  }

  postSalle(){
    console.log(this.postSalleForm?.value);
    this.service.postSalle(this.postSalleForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigate(['/home/salle']);
      }
    })
  }

}
