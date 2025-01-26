import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeService } from './home.service';
import { Glucose } from './glucose';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  username = localStorage.getItem('username');
  
  glucoseArray: Glucose[] = [];
  displayedColumns: string[] = ['ID', 'Refeição', 'Glicemia', 'Data'];
  dataSource = new MatTableDataSource(this.glucoseArray);
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    let token = localStorage.getItem('token');
   

    if (token !== null) {
      console.log('Token recuperado:', token);
      
      this.homeService.findAll(token).subscribe(glucoseArray => {
        console.log('Dados processados:', glucoseArray);
        
        this.dataSource.data = glucoseArray;
      });
      
    } else {
      // Handle the case when the token is null
    }
  }
}

