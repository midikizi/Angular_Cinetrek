import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeanceService } from 'src/app/service/seance.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateSeanceComponent implements OnInit{

  updateSeanceForm: FormGroup | any
  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute,
    private service: SeanceService,
    private fb: FormBuilder,
    private router: Router){}


    ngOnInit(){
      this.getSeanceById();
      this.updateSeanceForm = this.fb.group({
        heureDebut : ['', Validators.required], 
      })
    }

    getSeanceById(){
      this.service.getById(this.id).subscribe((res)=>{
        console.log(res);
        this.updateSeanceForm.patchValue(res);
      })
    }

    updateSeance(){
      console.log(this.updateSeanceForm.value);
      this.service.updateSeance(this.id,this.updateSeanceForm.value).subscribe((res)=>{
        console.log(res);
        if(res.id != null){
          this.router.navigateByUrl("/seance")
        }
      });
    }
}
