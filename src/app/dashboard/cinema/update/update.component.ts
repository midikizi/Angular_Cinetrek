import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaService } from 'src/app/service/cinema.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateCinemaComponent implements OnInit{
  updateCinemaForm: FormGroup|any;
  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private service: CinemaService
  ){}

  ngOnInit(){
    this.getCinemaById();
    this.updateCinemaForm = this.fb.group({
      name: ['', Validators.required],
      nombreSalle: ['', Validators.required],
      salles: ['', Validators.required],
      ville: ['', Validators.required],
  })
  }

  getCinemaById(){
    this.service.getById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateCinemaForm.patchValue(res);
    })
  }

  updateCinema(){
    console.log(this.updateCinemaForm.value);
    this.service.updateCinema(this.id,this.updateCinemaForm.value).subscribe((res)=>{
      console.log(res);
        if(res.id != null){
          this.router.navigateByUrl("/cinema");
        }
    });
  }

}
