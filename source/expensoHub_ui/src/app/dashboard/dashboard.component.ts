import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatProgressBarModule,
    MatSelectModule,
    MatExpansionModule,
    FormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  addNewClaim() {
    this.router.navigate(['/add-claim']);
  }
  summaryCards = [
    { title: 'Total Claims', value: '45', icon: 'receipt_long', trend: '+12%' },
    { title: 'Pending Approval', value: '8', icon: 'pending_actions', trend: '-5%' },
    { title: 'Total Amount', value: '$12,450', icon: 'payments', trend: '+8%' },
    { title: 'Approved This Month', value: '32', icon: 'check_circle', trend: '+15%' }
  ];

  recentClaims = [
    { id: 'CLM001', date: '2024-01-15', type: 'Travel', amount: 250.00, status: 'Pending' },
    { id: 'CLM002', date: '2024-01-14', type: 'Office Supplies', amount: 120.50, status: 'Approved' },
    { id: 'CLM003', date: '2024-01-13', type: 'Training', amount: 500.00, status: 'Rejected' },
    { id: 'CLM004', date: '2024-01-12', type: 'Meals', amount: 75.00, status: 'Approved' },
  ];

  displayedColumns: string[] = ['id', 'date', 'type', 'amount', 'status', 'actions'];

  monthlyBudget = {
    total: 5000,
    used: 3250,
    remaining: 1750
  };

  selectedYear: number = new Date().getFullYear();
  availableYears = [
    this.selectedYear,
    this.selectedYear - 1,
    this.selectedYear - 2
  ];

  monthlyClaimsList = [
    {
      month: 'January',
      claims: [
        { id: 'CLM005', date: '2024-01-05', type: 'Travel', amount: 350.00, status: 'Approved' },
        { id: 'CLM006', date: '2024-01-10', type: 'Office Supplies', amount: 220.50, status: 'Approved' }
      ],
      totalAmount: 570.50
    },
    {
      month: 'December',
      claims: [
        { id: 'CLM007', date: '2023-12-15', type: 'Training', amount: 800.00, status: 'Approved' },
        { id: 'CLM008', date: '2023-12-20', type: 'Travel', amount: 450.00, status: 'Approved' }
      ],
      totalAmount: 1250.00
    },
    // Add more months as needed
  ];

  displayedMonthlyColumns: string[] = ['id', 'date', 'type', 'amount', 'status'];

  onYearChange(year: number) {
    this.selectedYear = year;
    // Here you would typically fetch data for the selected year
  }
}
