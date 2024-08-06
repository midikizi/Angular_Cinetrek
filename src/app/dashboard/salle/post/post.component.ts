import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Salle } from 'src/app/models/salle';
import { SalleService } from 'src/app/service/salle.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostSalleComponent implements OnInit{

  postSalleForm: FormGroup | any
  salles!: Salle[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: SalleService){}

  ngOnInit(){
    this.postSalleForm=this.fb.group({
      name: ['', Validators.required],
      nombrePlace: ['', Validators.required],
      Cinema: ['', Validators.required],
      Places: ['', Validators.required],
      Projections: ['', Validators.required],
    })
  }

  postSalle(){
    console.log(this.postSalleForm?.value);
    this.service.postSalle(this.postSalleForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigateByUrl("/salle");
      }
    })
  }

}
