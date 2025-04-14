import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-company-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule,
    NavbarComponent,
  ],
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent {
  displayedColumns: string[] = ['id', 'employee', 'type', 'amount', 'date', 'status', 'actions'];
  reimbursementRequests = [
    {
      id: 'REQ001',
      employee: 'John Doe',
      type: 'Travel',
      amount: 1200,
      date: new Date(),
      status: 'Pending'
    },
    {
      id: 'REQ002',
      employee: 'Jane Smith',
      type: 'Office Supplies',
      amount: 450,
      date: new Date(),
      status: 'Approved'
    }
  ];

  statistics = {
    totalRequests: 156,
    pendingRequests: 23,
    approvedAmount: 45600,
    thisMonthRequests: 34
  };

  approveRequest(id: string) {
    console.log('Approving request:', id);
  }

  rejectRequest(id: string) {
    console.log('Rejecting request:', id);
  }

  viewDetails(id: string) {
    console.log('Viewing details:', id);
  }
}