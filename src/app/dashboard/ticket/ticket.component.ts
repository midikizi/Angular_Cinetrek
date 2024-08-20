import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { StockInfoService } from 'src/app/service/stock-info.service';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{

  tickets!: Ticket[];
  user!: any;

  constructor(private service: TicketService,
    private stock:StockInfoService,
  ){}

  ngOnInit() {
    this.getTicket();
    this.user = this.stock.getuserinfo()
    console.log(this.user)
  }

  getTicket() {
    this.service.getAllTicket().subscribe(
      (data)=>{
      this.tickets = data.results;
      console.log(data.results);
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
