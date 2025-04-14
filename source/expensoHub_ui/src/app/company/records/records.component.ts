import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    NavbarComponent,
    FormsModule
  ],
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent {
  selectedYear = 2024;
  selectedMonth = 'March';
  years = [2024, 2023, 2022];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'];

  displayedColumns: string[] = ['id', 'employee', 'type', 'amount', 'date', 'status', 'actions'];

  records = {
    pending: [
      { id: 'REC001', employee: 'John Doe', type: 'Travel', amount: 500, date: new Date(), status: 'Pending' },
      { id: 'REC002', employee: 'Jane Smith', type: 'Office Supplies', amount: 200, date: new Date(), status: 'Pending' }
    ],
    approved: [
      { id: 'REC003', employee: 'Mike Johnson', type: 'Training', amount: 1000, date: new Date(), status: 'Approved' }
    ],
    rejected: [
      { id: 'REC004', employee: 'Sarah Wilson', type: 'Miscellaneous', amount: 300, date: new Date(), status: 'Rejected' }
    ]
  };

  onYearChange(year: number) {
    this.selectedYear = year;
    // Implement year filter logic
  }

  onMonthChange(month: string) {
    this.selectedMonth = month;
    // Implement month filter logic
  }

  viewDetails(record: any) {
    console.log('Viewing details:', record);
  }
}