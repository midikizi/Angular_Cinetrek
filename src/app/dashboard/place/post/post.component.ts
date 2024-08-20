import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostPlaceComponent implements OnInit{
  postPlaceForm: FormGroup | any
  places!: Place[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: PlaceService
  ){}

  ngOnInit(){
    this.postPlaceForm = this.fb.group({
      numero:['', Validators.required],
      prix:['', Validators.required],
      libre:[false],
      reservee: [false],
    })
  }

  postPlace(){
    console.log(this.postPlaceForm?.value);
    this.service.postPlace(this.postPlaceForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigate(['/home/place']);
      }
    })
  }
}
