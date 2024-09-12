import { Injectable } from '@angular/core';
import { Recoveredjwttoken } from './recoveredjwttoken';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginAPIUrl = 'http://localhost:8080/users/login'; // URL da API de login do Blood Glucose

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<Recoveredjwttoken> {
    return this.httpClient.post<Recoveredjwttoken>(this.loginAPIUrl, { email, password });
  }


  
}
