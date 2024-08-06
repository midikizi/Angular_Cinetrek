import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdatePlaceComponent implements OnInit{

  updatePlaceForm: FormGroup | any
  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute,
    private service: PlaceService,
    private fb: FormBuilder,
    private router: Router){}

  ngOnInit(){
    this.updatePlaceForm = this.fb.group({
      numero:['', Validators.required],
      prix:['', Validators.required],
      salle:['', Validators.required],
      tickets: ['', Validators.required],
    })
  }

  getCategorieById(){
    this.service.getById(this.id).subscribe((res)=>{
      console.log(res);
      this.updatePlaceForm.patchValue(res);
    })
  }

  updatePlace(){
    console.log(this.updatePlaceForm.value);
    this.service.updatePlace(this.id,this.updatePlaceForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigateByUrl("/place");
      }
    });
  }

}
