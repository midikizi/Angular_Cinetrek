import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockInfoService {

  constructor() { }



  getuserinfo():string
  {
    return JSON.parse(localStorage.getItem('user')!)
  }

  // Méthode pour récupérer le token
  getToken(): string | null {
    return localStorage.getItem('token'); // Récupère le token depuis le localStorage
  }
}
