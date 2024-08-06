import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Seance } from 'src/app/models/seance';
import { SeanceService } from 'src/app/service/seance.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostSeanceComponent implements OnInit{
  postSeanceForm: FormGroup | any
  seances!: Seance[];

  constructor(
    private service: SeanceService,
    private fb: FormBuilder,
    private router: Router){}

    ngOnInit(){
      this.postSeanceForm = this.fb.group({
        heureDebut : ['', Validators.required], 
      })
    }

    postSeance(){
      console.log(this.postSeanceForm?.value);
      this.service.postSeance(this.postSeanceForm.value).subscribe((res)=>{
        console.log(res);
        if(res.id != null){
          this.router.navigateByUrl("/seance");
        }
      })
    }
}
