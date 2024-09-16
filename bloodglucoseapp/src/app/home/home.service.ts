import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Glucose } from './glucose';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  private glucoseAPIUrl = 'http://localhost:8080/glucoseapi/'; // URL da API de glicemia do Blood Glucose

  findAll(token: string): Observable<Glucose[]> {
    console.log('findAll -> Token recuperado: ' + token);
    const URL = this.glucoseAPIUrl + 'findAll';
    
    return this.httpClient.get<Glucose[]>(URL, { headers: { Authorization: 'Bearer ' + token } }).pipe(
        tap(data => console.log('Dados recebidos:', data)),
        catchError(error => {
            console.error('Erro ao buscar dados:', error);
            return of([]); // Retorna um Observable com um array vazio em caso de erro
        })
    );
  }

}
