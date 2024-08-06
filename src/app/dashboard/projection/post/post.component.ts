import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: ProjectionProjection){}

  ngOnInit(){
    this.postProjectionForm=this.fb.group({
      dateProjection: ['', Validators.required],
      prix: ['', Validators.required],
      salle: ['', Validators.required],
      film: ['', Validators.required],
      tickets: ['', Validators.required],
      seance: ['', Validators.required],
    })
  }

  postProjection(){
    console.log(this.postProjectionForm?.value);
    this.service.postProjection(this.postProjectionForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigateByUrl("/place");
      }
    })
  }

}
