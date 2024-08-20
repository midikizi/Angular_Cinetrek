import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VilleService {
  private villeUrl = 'http://127.0.0.1:8000/api/cinema/ville/';

  constructor(private httpClient: HttpClient) { }

  getAllVille():Observable<any>{
    return this.httpClient.get<any>(this.villeUrl);
  }

  getById(id:number):Observable<any>{
    return this.httpClient.get<any>(this.villeUrl+id);
  }

  deleteVille(id: number){
    return this.httpClient.delete(this.villeUrl+id);
  }

  postVille(ville:any):Observable<any>{
    return this.httpClient.post(this.villeUrl,ville);
  }

  updateVille(id:number, ville:any):Observable<any>{
    return this.httpClient.put(`${this.villeUrl+id}/`,ville);
  }

}
