import { HttpClient, HttpResponse , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddGlucoseService {

   private addGlucoseAPIUrl = 'http://localhost:8080/glucoseapi/save'; // URL da API de login do Blood Glucose
  
   constructor(private httpClient: HttpClient,
               private snackBar: MatSnackBar
   ) { }

   save(meal: string, value: string, date: string) {
    
    let token = localStorage.getItem('token');
    const header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    const options = { headers: header };

    let glucose: Glucose = {
      meal: meal,   // Aqui você define o valor da propriedade meal
      value: value,    // Defina um valor inicial para 'value'
      datetime: new Date(date) // Defina um valor inicial para 'datetime'
    };

    return this.httpClient.post(this.addGlucoseAPIUrl, glucose, options).subscribe(
      response => {
        this.snackBar.open('Glicemia cadastrada', 'Sucesso', {
          duration: 3000
        });
        console.log("API Response:", response); // Exibe a resposta da API
      },
      error => {
        this.snackBar.open('Erro ao cadastrar a glicemia', 'Erro' + error, {
          duration: 3000
        });
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
