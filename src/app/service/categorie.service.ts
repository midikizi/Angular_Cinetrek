import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private categorieUrl = 'http://localhost:8000/api/cinema/categorie/';

  constructor(private httpClient: HttpClient) { }

  getAllCategorie():Observable<any>
  {
    return this.httpClient.get(this.categorieUrl);
  }

  getById(id:number):Observable<any>
  {
    return this.httpClient.get(this.categorieUrl+id);
  }

  deleteCategorie(id: number)
  {
    return this.httpClient.delete(this.categorieUrl+id);
  }

  postCategorie(categorie:any):Observable<any>
  {
    return this.httpClient.post(this.categorieUrl,categorie);
  }

  updateCategorie(id:number, categorie:any):Observable<any>
  {
    return this.httpClient.put(this.categorieUrl+id,categorie);
  }

}