import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cinema } from 'src/app/models/cinema';
import { CinemaService } from 'src/app/service/cinema.service';
import { SalleService } from 'src/app/service/salle.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateSalleComponent {
  updateSalleForm: FormGroup | any
  id: number = this.activatedRoute.snapshot.params["id"];
  cinemas!: Cinema[];

  constructor(private activatedRoute: ActivatedRoute,
    private service: SalleService,
    private fb: FormBuilder,
    private router: Router,
    private cinemaService: CinemaService){}

  ngOnInit(){
    this.getCategorieById();
    this.getCinema();
    this.updateSalleForm=this.fb.group({
      nom: ['', Validators.required],
      nombrePlace: ['', Validators.required],
      cinema: ['', Validators.required],
      places: ['', Validators.required],
    })
  }

  getCinema(){
    this.cinemaService.getAllCinema().subscribe(
      (data)=>{
      this.cinemas=data.results;
      console.log(data.results);
    },
    (error)=>{
      console.log("error", error)
    });
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
          this.router.navigate(['/home/salle']);
        }
    });
  }


}
