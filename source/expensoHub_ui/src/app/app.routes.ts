import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddClaimComponent } from './claims/add-claim/add-claim.component';
import { LoginComponent } from './auth/login/login.component';
import { CompanyLoginComponent } from './auth/company-login/company-login.component';
import { CompanyRegisterComponent } from './auth/company-register/company-register.component';
import { CompanyDashboardComponent } from './company/dashboard/company-dashboard.component';
import { CompanyProfileComponent } from './company/profile/company-profile.component';
import { EmployeesComponent } from './company/employees/employees.component';
import { RecordsComponent } from './company/records/records.component';
import { SettingsComponent } from './company/settings/settings.component';  
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/company/login',
    component: CompanyLoginComponent
  },
  {
    path: 'auth/company/register',
    component: CompanyRegisterComponent
  },
  {
    path: 'company/dashboard',
    component: CompanyDashboardComponent
  },
  {
    path: 'company/profile',
    component: CompanyProfileComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'add-claim',
    component : AddClaimComponent
  },
  {
    path: 'company/employees',
    component: EmployeesComponent
  },
  {
    path: 'company/records',
    component: RecordsComponent
  },
  {
    path: 'company/settings',
    component: SettingsComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
