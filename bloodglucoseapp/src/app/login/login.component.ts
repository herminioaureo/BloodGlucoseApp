import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Recoveredjwttoken } from './recoveredjwttoken';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LoginService]
})
export class LoginComponent {

  token! :Recoveredjwttoken;
  loginError = false;

  constructor(private loginService: LoginService,
              private router: Router
  ) {}

  login(email: string, password: string) {
    this.loginService.login(email, password).subscribe((data) => {
      console.log(data);
      this.token = data;
      console.log(this.token.token);
      localStorage.setItem('token', this.token.token);
      this.router.navigate(['/home']); // Redirecionar para a página /home em caso de sucesso
    },(error) => {
      this.loginError = true;
    });

  }

}