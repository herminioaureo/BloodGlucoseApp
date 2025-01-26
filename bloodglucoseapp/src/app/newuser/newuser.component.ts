import { Component } from '@angular/core';
import { NewuserService } from './newuser.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardActions } from '@angular/material/card';

@Component({
  selector: 'app-newuser',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatButtonModule, MatCardActions],
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.scss',
  providers: [NewuserService]
})
export class NewuserComponent {

  constructor(private newUserService: NewuserService) {}
  
  addUser(username: string, password: string) {
    console.log('Component Login: ' + username + ' Password: ' + password);
    this.newUserService.addUser(username, password, "ROLE_CUSTOMER").subscribe((data) => {
      
        console.log("data: "  + data);

     
        });
  }
      
}
    
 
