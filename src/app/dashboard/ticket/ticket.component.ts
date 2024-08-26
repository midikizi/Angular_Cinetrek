import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place';
import { Salle } from 'src/app/models/salle';
import { Ticket } from 'src/app/models/ticket';
import { PlaceService } from 'src/app/service/place.service';
import { SalleService } from 'src/app/service/salle.service';
import { StockInfoService } from 'src/app/service/stock-info.service';
import { TicketService } from 'src/app/service/ticket.service';
import { ToasterService } from 'src/app/service/toast/toaster.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{

  tickets!: Ticket[];
  user!: any;
  Salles!: Salle[];
  places!: Place[];

  constructor(private service: TicketService,
    private stock:StockInfoService,
    private serviceSal: SalleService,
    private servicePla: PlaceService,
    private toaster: ToasterService
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

  getPlaceName(place:Place): string  {
    const id = place.id;
    const cat = this.places.find(v => v.id === id);console.log(id,cat);
    return cat ? cat.numero.toString() : 'place non trouvé';
  }

  getSalleName(id: number): string {
    const cat = this.Salles.find(v => v.id === id);console.log(id,cat);
    return cat ? cat.nom : 'Salle inconnue';
  }

}
