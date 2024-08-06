import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateVilleComponent implements OnInit{

  updateVilleForm: FormGroup | any
  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: VilleService,
    private router: Router) { }

    ngOnInit(){
      this.getVilleById();
      this.updateVilleForm = this.fb.group({
        name:['', Validators.required],
        longitude:['', Validators.required],
        latitude:['', Validators.required],
        altitude: ['', Validators.required],
        cinema: ['', Validators.required],
  
      })
    }

    getVilleById(){
      this.service.getById(this.id).subscribe((res)=>{
        console.log(res);
        this.updateVilleForm.patchValue(res);
      })
    }

    updateVille(){
      console.log(this.updateVilleForm.value);
      this.service.updateVille(this.id,this.updateVilleForm.value).subscribe((res)=>{
        console.log(res);
        if(res.id != null){
          this.router.navigateByUrl("/ville");
        }
      });
    }

}
