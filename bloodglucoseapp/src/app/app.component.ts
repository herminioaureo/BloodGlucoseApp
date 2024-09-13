import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bloodglucoseapp';

  constructor(private router: Router) {}


  logout() {
    console.log('Logout. Token antes do Logout: ' + localStorage.getItem('token'));
    console.log('Logout. username apos o Logout: ' + localStorage.getItem('username'));
    localStorage.removeItem('token');
    console.log('Logout. Token apos o Logout: ' + localStorage.getItem('token'));
    localStorage.removeItem('username');
    console.log('Logout. username apos o Logout: ' + localStorage.getItem('username'));
    this.router.navigate(['/login']);

  }

}


