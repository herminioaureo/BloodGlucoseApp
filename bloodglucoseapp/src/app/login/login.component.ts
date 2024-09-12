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
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatButtonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LoginService]
})
export class LoginComponent {

  userToken! :Recoveredjwttoken;
  loginError = false;

  constructor(private loginService: LoginService,
              private router: Router
  ) {}

  login(email: string, password: string) {
    this.loginService.login(email, password).subscribe((data) => {
      this.userToken = data;

      if (this.userToken.token != null) {
        this.userToken.isSucess = true;
      }

      localStorage.setItem('token', JSON.stringify(this.userToken.token));

      this.router.navigate(['/home']); // Redirecionar para a página /home em caso de sucesso
    },(error) => {
      this.loginError = true;
    });

  }

}