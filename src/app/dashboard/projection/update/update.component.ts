import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectionProjection } from 'src/app/service/projection.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateProjectionComponent implements OnInit{

  updateProjectionForm: FormGroup | any
  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute,
    private service: ProjectionProjection,
    private fb: FormBuilder,
    private router: Router){}

    ngOnInit(){
      this.getProjectionById();
      this.updateProjectionForm=this.fb.group({
        dateProjection: ['', Validators.required],
        prix: ['', Validators.required],
        salle: ['', Validators.required],
        film: ['', Validators.required],
        tickets: ['', Validators.required],
        seance: ['', Validators.required],
      })
    }

    getProjectionById(){
      this.service.getById(this.id).subscribe((res)=>{
        console.log(res);
        this.updateProjectionForm.patchValue(res);
      })
    }

    updateProjection(){
      console.log(this.updateProjectionForm.value);
      this.service.updateProjection(this.id,this.updateProjectionForm.value).subscribe((res)=>{
        console.log(res);
        if(res.id != null){
          this.router.navigateByUrl("/projection");
        }
      })
    }

}
