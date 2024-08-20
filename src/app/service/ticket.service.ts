import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private ticketUrl ='http://127.0.0.1:8000/api/ticket/tickets/';

  constructor(private httpClient: HttpClient) { }

  getAllTicket():Observable<any>{
    return this.httpClient.get(this.ticketUrl);
  }

  getById(id:number):Observable<any>{
    return this.httpClient.get(this.ticketUrl+id);
  }

  deleteTicket(id: number){
    return this.httpClient.delete(this.ticketUrl+id);
  }

  postTicket(ticket:any):Observable<any>{
    return this.httpClient.post(this.ticketUrl,ticket);
  }

  updateTicket(id:number, ticket:any):Observable<any>{
    return this.httpClient.put(this.ticketUrl+id,ticket);
  }
}
