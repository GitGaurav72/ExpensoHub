import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AddEmployeeDialogComponent } from './add-employee-dialog/add-employee-dialog.component';

interface Employee {
  id: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  joinDate: string;
}

interface Department {
  name: string;
  employees: Employee[];
}

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    NavbarComponent,
    FormsModule
  ],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  departments: Department[] = [
    {
      name: 'HR',
      employees: [
        { id: 'HR001', name: 'John Doe', designation: 'HR Manager', email: 'john@example.com', phone: '1234567890', joinDate: '2023-01-15' },
        { id: 'HR002', name: 'Jane Smith', designation: 'HR Executive', email: 'jane@example.com', phone: '9876543210', joinDate: '2023-02-20' }
      ]
    },
    {
      name: 'Development',
      employees: [
        { id: 'DEV001', name: 'Mike Johnson', designation: 'Senior Developer', email: 'mike@example.com', phone: '5555555555', joinDate: '2023-03-10' },
        { id: 'DEV002', name: 'Sarah Wilson', designation: 'Full Stack Developer', email: 'sarah@example.com', phone: '4444444444', joinDate: '2023-04-05' }
      ]
    },
    {
      name: 'Management',
      employees: [
        { id: 'MGT001', name: 'Robert Brown', designation: 'Project Manager', email: 'robert@example.com', phone: '3333333333', joinDate: '2023-01-01' }
      ]
    },
    {
      name: 'Support',
      employees: [
        { id: 'SUP001', name: 'Emily Davis', designation: 'Customer Care Executive', email: 'emily@example.com', phone: '2222222222', joinDate: '2023-05-15' }
      ]
    }
  ];

  displayedColumns: string[] = ['id', 'name', 'designation', 'email', 'phone', 'joinDate', 'actions'];

  constructor(private dialog: MatDialog) {}

  addNewEmployee(): void {
    const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
      width: '1000px', // Increased width
      maxWidth: '95vw', // Responsive max width
      panelClass: ['custom-dialog', 'employee-dialog'],
      disableClose: true // Prevents closing by clicking outside
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('New employee data:', result);
        // Implement logic to add employee to the list
      }
    });
  }
}