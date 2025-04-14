import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from '../shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { Router  }  from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports : [MatCardModule, MatIconModule, CommonModule, MatButtonModule, FooterComponent, RouterModule]
})
export class HomeComponent {

  constructor(private router: Router){}
  subscriptionPlans = [
    {
      name: 'Basic',
      price: 29.99,
      features: [
        'Up to 50 employees',
        'Basic reimbursement tracking',
        'Monthly reports',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: 59.99,
      features: [
        'Up to 200 employees',
        'Advanced reimbursement tracking',
        'Real-time reports',
        'Priority support',
        'Automated approval workflow'
      ]
    },
    {
      name: 'Enterprise',
      price: 99.99,
      features: [
        'Unlimited employees',
        'Custom reimbursement rules',
        'Advanced analytics',
        '24/7 support',
        'Custom integration'
      ]
    }
  ];
  loginAsUser(){
    this.router.navigate(['/auth/login'], { queryParams: { type: 'user' }});
  }
  loginAsCompany(){
    this.router.navigate(['/auth/company/login'], { queryParams: { type: 'user' }});
   
    
  }

  gotocompanyDashBoart(){
    this.router.navigate(['/company/dashboard'],  { queryParams: { type: 'companyId' }});
  }
  
}