import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private salleUrl = 'http://localhost:8000/api/cinema/salle/';

  constructor(private httpClient: HttpClient) { }

  getAllSalle():Observable<any>{
    return this.httpClient.get(this.salleUrl);
  }

  getById(id:number):Observable<any>{
    return this.httpClient.get(this.salleUrl+id);
  }

  deleteSalle(id: number){
    return this.httpClient.delete(this.salleUrl+id);
  }

  postSalle(salle:any):Observable<any>{
    return this.httpClient.post(this.salleUrl,salle);
  }

  updateSalle(id:number, salle:any):Observable<any>{
    return this.httpClient.put(this.salleUrl+id,salle);
  }
}
