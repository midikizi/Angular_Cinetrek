import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from 'src/app/models/ville';
import { CinemaService } from 'src/app/service/cinema.service';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateCinemaComponent implements OnInit{
  updateCinemaForm: FormGroup|any;
  id: number = this.activatedRoute.snapshot.params["id"];
  villes!: Ville[];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private service: CinemaService,
    private villeService: VilleService
  ){}

  ngOnInit(){
    this.getCinemaById();
    this.updateCinemaForm = this.fb.group({
      nom: ['', Validators.required],
      nombreSalle: ['', Validators.required],
      longitude: ['', Validators.required],
      latitute: ['', Validators.required],
      altitude: ['', Validators.required],
      ville: ['', Validators.required],
  })

    this.getVille();
  }

  getVille() {
    this.villeService.getAllVille().subscribe(
      (data)=>{
      this.villes = data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error")
    });
  }


  getCinemaById(){
    this.service.getById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateCinemaForm.patchValue(res);
    })
  }

  updateCinema(){
    console.log(this.updateCinemaForm.value);
    this.service.updateCinema(this.id,this.updateCinemaForm.value).subscribe((res)=>{
      console.log(res);
        if(res.id != null){
          this.router.navigate(['/home/cinema']);
        }
    });
  }

}
