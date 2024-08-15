import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostTicketComponent implements OnInit{
  postTicketForm: FormGroup | any
  tickets!: Ticket[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: TicketService
  ) {}

  ngOnInit(){
    this.postTicketForm = this.fb.group({
      nomClient:['', Validators.required],
      prix:['', Validators.required],
      codepayement:['', Validators.required],
      reserve: ['', Validators.required],
      place: ['', Validators.required],
      projection: ['', Validators.required],
    })
  }

  postTicket(){
    this.service.postTicket(this.postTicketForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigateByUrl("/ticket");
      }
    })
  }

}
