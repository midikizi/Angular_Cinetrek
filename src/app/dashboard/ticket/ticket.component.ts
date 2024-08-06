import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{

  tickets!: Ticket[];

  constructor(private service: TicketService){}

  ngOnInit() {
    this.getTicket();
  }

  getTicket() {
    this.service.getAllTicket().subscribe((data: Ticket[])=>{
      this.tickets = data;
      console.log(data);
    },
    (error)=>{
      console.log("error")
    });
  }

  deleteCategorie(id:number){
    this.service.deleteTicket(id).subscribe((data)=>{
      console.log(data);
      this.getTicket();
    },
    (error)=>{
      console.log("error")
    });
  }


}
