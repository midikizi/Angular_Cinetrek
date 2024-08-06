import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalleService } from 'src/app/service/salle.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateSalleComponent {
  updateSalleForm: FormGroup | any
  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute,
    private service: SalleService,
    private fb: FormBuilder,
    private router: Router){}

  ngOnInit(){
    this.updateSalleForm=this.fb.group({
      name: ['', Validators.required],
      nombrePlace: ['', Validators.required],
      Cinema: ['', Validators.required],
      Places: ['', Validators.required],
      Projections: ['', Validators.required],
    })
  }

  getCategorieById(){
    this.service.getById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateSalleForm.patchValue(res);
    })
  }

  updateSalle(){
    console.log(this.updateSalleForm.value);
    this.service.updateSalle(this.id,this.updateSalleForm.value).subscribe((res)=>{
      console.log(res);
        if(res.id != null){
          this.router.navigateByUrl("/salle");
        }
    });
  }


}
