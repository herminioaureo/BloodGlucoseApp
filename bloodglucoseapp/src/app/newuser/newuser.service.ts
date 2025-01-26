import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewuserService {

  
  constructor(private httpClient: HttpClient) { }

  private newUserAPIUrl = 'http://localhost:8080/users'; // URL da API de login do Blood Glucose

  addUser(username: string, password: string, role: string) {
    console.log('Login: ' + username + ' Password: ' + password);
    return this.httpClient.post(this.newUserAPIUrl, { username, password, role });
  }

  
}
