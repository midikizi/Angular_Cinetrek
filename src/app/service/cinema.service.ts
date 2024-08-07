import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private httpClient: HttpClient) { }
  private cinemaUrl = 'http://localhost:8000/api/cinema/cinema/';

  getAllCinema():Observable<any>{
    return this.httpClient.get<any>(this.cinemaUrl);
  }

  getById(id:number):Observable<any>{
    return this.httpClient.get<any>(this.cinemaUrl+id);
  }

  deleteCinema(id:number){
    return this.httpClient.delete(this.cinemaUrl+id);
  }

  postCinema(cinema:any):Observable<any>{
    return this.httpClient.post(this.cinemaUrl,cinema);
  }

  updateCinema(id:number, cinema:any):Observable<any>{
    return this.httpClient.put(this.cinemaUrl+id,cinema);
  }

  getCinemaByName(name: string): Observable<any> 
  {
    return this.httpClient.get(this.cinemaUrl+name);
  }

}
