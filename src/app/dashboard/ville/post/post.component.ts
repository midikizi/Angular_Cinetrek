import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from 'src/app/models/ville';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostVilleComponent implements OnInit{

  postVilleForm: FormGroup | any
  villes!: Ville[];

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: VilleService,
    private router: Router) {}

    ngOnInit(){
      this.postVilleForm = this.fb.group({
        nom:['', Validators.required],
        longitude:['', Validators.required],
        latitute:['', Validators.required],
        altitude: ['', Validators.required],
      })
    }

    postVille(){
      this.service.postVille(this.postVilleForm.value).subscribe((res)=>{
        console.log(res);
        if(res.id != null){
          this.router.navigate(['/home/ville']);
        }
      })
    }

}
