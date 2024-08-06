import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpinterceportInterceptor implements HttpInterceptor {

  excludeUrls=[
    'http://localhost:8000/accounts/api/login/',
    'http://localhost:8000/accounts/api/sign-up/gerant/',
    'http://localhost:8000/accounts/api/sign-up/client/',
  ]

  constructor() {}

  getToken():string {
  const token = localStorage.getItem('token')
  if (token) {
    return JSON.stringify(token);
  }
  else{
    return '';
  }
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isExelude = this.excludeUrls.some(url=>request.url.startsWith(url));
    console.log(isExelude);
    if (!isExelude){
      request = request.clone(
        {
          setHeaders:{
            Authorization: `Bearer ${this.getToken}`
          }
        }
      )
    }
    return next.handle(request);
  }
}
