import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private httpClient: HttpClient) { }
  private filmUrl = 'http://127.0.0.1:8000/api/cinema/film/'

  getAllFilm():Observable<any>{
    return this.httpClient.get<any>(this.filmUrl);
  }

  getById(id:number):Observable<any>{
    return this.httpClient.get<any>(this.filmUrl+id);
  }

  deleteFilm(id:number){
    return this.httpClient.delete(this.filmUrl+id);
  }

  postFilm(film:any):Observable<any>{
    return this.httpClient.post(this.filmUrl,film);
  }

  updateFilm(id:number, film:any):Observable<any>{
    return this.httpClient.put(`${this.filmUrl+id}/`,film);
  }

  getFilmByTitre(titre: string): Observable<any> {
    return this.httpClient.get(this.filmUrl+titre);
  }

}
