import { Injectable } from '@angular/core';
import { Recoveredjwttoken } from './recoveredjwttoken';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginAPIUrl = 'http://localhost:8080/users/login'; // URL da API de login do Blood Glucose

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<Recoveredjwttoken> {
    console.log('Login: ' + username + ' Password: ' + password);
    return this.httpClient.post<Recoveredjwttoken>(this.loginAPIUrl, { username, password });
  }
}
