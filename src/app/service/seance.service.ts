import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL = ["http://localhost:8080/api"]
@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor(private httpClient: HttpClient) { }

  getAllSeance():Observable<any>
  {
    return this.httpClient.get(BASIC_URL+ "/seance/all");
  }

  getById(id:number):Observable<any>
  {
    return this.httpClient.get(BASIC_URL+ "/seance/"+id);
  }

  deleteSeance(id: number)
  {
    return this.httpClient.delete(BASIC_URL+ "/seance/"+id);
  }

  postSeance(seance:any):Observable<any>
  {
    return this.httpClient.post(BASIC_URL+"/seance/save",seance);
  }

  updateSeance(id:number, seance:any):Observable<any>
  {
    return this.httpClient.put(BASIC_URL+"/seance/update/"+id,seance);
  }
}
