import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/place';
import { Salle } from 'src/app/models/salle';
import { Ticket } from 'src/app/models/ticket';
import { PlaceService } from 'src/app/service/place.service';
import { SalleService } from 'src/app/service/salle.service';
import { StockInfoService } from 'src/app/service/stock-info.service';
import { TicketService } from 'src/app/service/ticket.service';
import { ToasterService } from 'src/app/service/toast/toaster.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostTicketComponent implements OnInit{
  postTicketForm: FormGroup | any
  tickets!: Ticket[];
  user!: any;
  Salles!: Salle[];
  places!: Place[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: TicketService,
    private stock:StockInfoService,
    private serviceSal: SalleService,
    private servicePla: PlaceService,
    private toaster: ToasterService
  ) {}

  ngOnInit(){
    this.getPlace();
    this.getSalle();
    this.getUserInfo();
    this.postTicketForm = this.fb.group({
      nomClient:['', Validators.required],
      prix:['', Validators.required],
      codePayement:['', Validators.required],
      salle: ['', Validators.required],
      place: ['', Validators.required],
    })
  }

  postTicket(){
    console.log(this.postTicketForm);
    this.service.postTicket(this.postTicketForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigate(['/home/ticket']);
        this.toaster.showSuccess('réservation effectuée','tickets')
      }
    })
  }

  getSalle() {
    this.serviceSal.getAllSalle().subscribe(
      (data)=>{
      this.Salles = data.results;
      console.log(data.results);
    },(error)=>{console.log("error",error)});
  }

  getPlace() {
    this.servicePla.getAllPlace().subscribe(
      (data)=>{
      this.places = data.results;
      console.log(data.results);
    },
    (error) => {console.log("error")});
  }

  getUserInfo(): void {
    this.user = this.stock.getuserinfo();  // Appel de la méthode du service
    console.log(this.user);
  }


}
