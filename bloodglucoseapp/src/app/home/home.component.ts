import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor() {
    console.log(localStorage.getItem('token'));  // Recuperar o token do usuário do localStorage
  }
  
}
