import { HttpClient, HttpResponse , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddGlucoseService {

   private addGlucoseAPIUrl = 'http://localhost:8080/glucoseapi/save'; // URL da API de login do Blood Glucose
  
   constructor(private httpClient: HttpClient) { }

   save(meal: string, value: string, date: string) {
    
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    const options = { headers: header };


    let glucose: Glucose = {
      meal: meal,   // Aqui você define o valor da propriedade meal
      value: value,    // Defina um valor inicial para 'value'
      datetime: new Date() // Defina um valor inicial para 'datetime'
    };

    console.log("AddGlucoseService" + header);
    return this.httpClient.post(this.addGlucoseAPIUrl, glucose, options).subscribe(
      response => {
        console.log("API Response:", response); // Exibe a resposta da API
      },
      error => {
        console.error("API Error:", error); // Exibe qualquer erro na requisição
      }
    );

   }

}

export interface Glucose {
  meal: string;
  value: string;
  datetime: Date;
}
