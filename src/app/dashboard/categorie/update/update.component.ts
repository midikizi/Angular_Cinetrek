import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  updateCategorieForm: FormGroup | any
  id: string | any

  constructor(private activatedRoute: ActivatedRoute,
    private service: CategorieService,
    private fb: FormBuilder,
    private router: Router){}

  ngOnInit(){
    this.CreateFrom(null);
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getCategorieById();
  }

  CreateFrom(obj:any){

    console.log(obj);
    this.updateCategorieForm = this.fb.group({
      nom: [obj? obj.nom:'',Validators.required],
      description: [obj?obj.description:'',Validators.required],
    })
  }


  getCategorieById(){
    this.service.getById(this.id).subscribe((res)=>{
      console.log(res);
      this.CreateFrom(res);
      // this.updateCategorieForm.patchValue(res);
    })
  }

  updateCategorie(){
    console.log(this.updateCategorieForm.value);
    this.service.updateCategorie(this.id,this.updateCategorieForm.value).subscribe((res)=>{
      console.log(res);
        if(res.id != null){
          this.router.navigate(['/home/categorie']);
        }
    });
  }

}
