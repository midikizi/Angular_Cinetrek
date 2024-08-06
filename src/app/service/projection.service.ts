import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectionProjection {
  private projectionUrl = 'http://localhost:8000/api/cinema/projection/';

  constructor(private httpClient: HttpClient) { }

  getAllProjection():Observable<any>{
    return this.httpClient.get(this.projectionUrl);
  }

  getById(id:number):Observable<any>{
    return this.httpClient.get(this.projectionUrl+id);
  }

  deleteProjection(id: number){
    return this.httpClient.delete(this.projectionUrl+id);
  }

  postProjection(projection:any):Observable<any>{
    return this.httpClient.post(this.projectionUrl,projection);
  }

  updateProjection(id:number, projection:any):Observable<any>{
    return this.httpClient.put(this.projectionUrl+id,projection);
  }
}
