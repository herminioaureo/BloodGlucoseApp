import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardActions } from '@angular/material/card';

@Component({
  selector: 'app-addglucose',
  standalone: true,
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
  templateUrl: './addglucose.component.html',
  styleUrl: './addglucose.component.scss'
})
export class AddglucoseComponent {

  saveGlucose(meal: string, value: string, date: string) {
    console.log("Vai salvar a glicemia ->" + meal + value + date);
    
  }

}
