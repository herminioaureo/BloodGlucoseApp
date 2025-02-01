import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddglucoseComponent } from './addglucose/addglucose.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardActions } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatCardModule, MatDialogModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'bloodglucoseapp';

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  readonly dialog = inject(MatDialog);

  openDialog() {
    let token =  localStorage.getItem('token');
    if (token != null) {
      const dialogRef = this.dialog.open(DialogContentExampleDialog);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    } else {
      console.log("token ausente");
    }
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  standalone: true,
  templateUrl: './addglucose/addglucose.component.html',
  imports: [RouterOutlet, 
        MatToolbarModule, 
        MatIconModule, 
        MatCardModule, 
        MatDialogModule, 
        MatButtonModule, 
        FormsModule, 
        MatFormFieldModule,
        MatInputModule, 
        MatDividerModule, 
        MatCardActions,
        MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentExampleDialog {

  glucoseComponent: AddglucoseComponent = new AddglucoseComponent;

  saveGlucose(meal: string, value: string, date: string){
    this.glucoseComponent.saveGlucose(meal, value, date);
  }

}


