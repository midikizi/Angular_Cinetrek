import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/service/film.service';
import { ProjectionProjection } from 'src/app/service/projection.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateProjectionComponent implements OnInit{

  updateProjectionForm: FormGroup | any
  id: number = this.activatedRoute.snapshot.params["id"];
  films!: Film[];

  constructor(private activatedRoute: ActivatedRoute,
    private service: ProjectionProjection,
    private fb: FormBuilder,
    private router: Router,
    private filmService: FilmService){}

    ngOnInit(){
      this.getProjectionById();
      this.getFilm();
      this.updateProjectionForm=this.fb.group({
      date: ['', Validators.required],
      prix: ['', Validators.required],
      heureDebut: ['', Validators.required],
      film: ['', Validators.required],
      })
    }

    getFilm() {
      this.filmService.getAllFilm().subscribe(
        (data)=>{
        this.films = data.results;
        console.log(data.results);
      },
      (error)=>{
        console.log("error",error)
      });
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
          this.router.navigate(['/home/projection']);
        }
      })
    }

}
