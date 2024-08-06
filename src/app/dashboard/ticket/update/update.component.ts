import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateTicketComponent implements OnInit{
  updateTicketForm: FormGroup | any
  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: TicketService,
    private router: Router) { }

    ngOnInit(){
      this.getTicketById();
      this.updateTicketForm = this.fb.group({
        nomClient:['', Validators.required],
        prix:['', Validators.required],
        codepayement:['', Validators.required],
        reserve: ['', Validators.required],
        place: ['', Validators.required],
        projection: ['', Validators.required],
  
      })
    }

    getTicketById(){
      this.service.getById(this.id).subscribe((res)=>{
        console.log(res);
        this.updateTicketForm.patchValue(res);
      })
    }

    updateTicket(){
      console.log(this.updateTicketForm.value);
      this.service.updateTicket(this.id,this.updateTicketForm.value).subscribe((res)=>{
        console.log(res);
        if(res.id != null){
          this.router.navigateByUrl("/film");
        }
      });
    }

}
