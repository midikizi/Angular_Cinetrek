import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// const BASIC_URL = ["http://localhost:8080/api"]
@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor(private httpClient: HttpClient) { }
  private seanceUrl = 'http://127.0.0.1:8000/api/cinema/seance/'

  getAllSeance():Observable<any>{
    return this.httpClient.get<any>(this.seanceUrl);
  }

  getById(id:number):Observable<any>{
    return this.httpClient.get<any>(this.seanceUrl+id);
  }

  deleteSeance(id: number){
    return this.httpClient.delete(this.seanceUrl+id);
  }

  postSeance(seance:any):Observable<any>{
    return this.httpClient.post(this.seanceUrl,seance);
  }

  updateSeance(id:number, seance:any):Observable<any>
  {
    return this.httpClient.put(`${this.seanceUrl+id}/`,seance);
  }
}
