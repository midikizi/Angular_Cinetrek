import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private placeUrl = 'http://localhost:8000/api/cinema/place/';

  constructor(private httpClient: HttpClient) { }

  getAllPlace():Observable<any>{
    return this.httpClient.get<any>(this.placeUrl);
  }

  getById(id:number):Observable<any>{
    return this.httpClient.get<any>(this.placeUrl+id);
  }

  deletePlace(id: number){
    return this.httpClient.delete(this.placeUrl+id);
  }

  postPlace(place:any):Observable<any>{
    return this.httpClient.post(this.placeUrl,place)
  }

  updatePlace(id:number, place:any):Observable<any>{
    return this.httpClient.put(`${this.placeUrl+id}/`,place)
  }

}
