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
    return this.httpClient.get(this.placeUrl);
  }

  getById(id:number):Observable<any>{
    return this.httpClient.get(this.placeUrl+id);
  }

  deletePlace(id: number){
    return this.httpClient.delete(this.placeUrl+id);
  }

  postPlace(film:any):Observable<any>{
    return this.httpClient.post(this.placeUrl,film)
  }

  updatePlace(id:number, film:any):Observable<any>{
    return this.httpClient.put(this.placeUrl+id,film)
  }

}
