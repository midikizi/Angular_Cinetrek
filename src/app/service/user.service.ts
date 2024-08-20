import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl = 'http://localhost:8000/accounts/api/login/';
  private logoutUrl = 'http://localhost:8000/accounts/api/logout/user/';
  private registerGerantUrl = 'http://localhost:8000/accounts/api/sign-up/gerant/';
  private registerClientUrl = 'http://localhost:8000/accounts/api/sign-up/client/';

  constructor(private http: HttpClient) { }

  login(data:any){
    return this.http.post<any>(this.loginUrl, data);
  }

  registerClient(user:any):Observable<any>{
    return this.http.post(this.registerClientUrl,user);
  }

  registerGerant(user:any):Observable<any>{
    return this.http.post(this.registerGerantUrl,user);
  }

  logout(): void {
    this.http.post<any>(this.logoutUrl, {})
      .subscribe(() => {
        localStorage.removeItem('token');localStorage.removeItem('user');
      });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  // login(username: string, password: string): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post<any>(this.loginUrl, { username, password }, { headers })
  //     .pipe(
  //       map(response => {
  //         if (response && response.token) {
  //           localStorage.setItem('currentUser', JSON.stringify(response));
  //           localStorage.setItem('token', response.token)
  //         }
  //         return response;
  //       })
  //     );
  // }

  // registerGerant(username: string, password: string, email: string, first_name:string, last_name:string): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post<any>(this.registerGerantUrl, { username, password, email, first_name, last_name }, { headers })
  //     .pipe(
  //       map(response => {
  //         return response;
  //       })
  //     );
  // }

  // registerClient(username: string, password: string, email: string, first_name:string, last_name:string): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post<any>(this.registerClientUrl, { username, password, email, first_name, last_name }, { headers })
  //     .pipe(
  //       map(response => {
  //         return response;
  //       })
  //     );
  // }

}
