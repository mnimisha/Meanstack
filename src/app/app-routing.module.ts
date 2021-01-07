import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  { path: 'login',component:LoginComponent},
  { path: 'register',component:NewUserComponent},
  { path: 'forgot-password',component:ForgotComponent},
  { path: 'logout',component:LogoutComponent},
  { path: 'dashboard',component:DashboardComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
  { path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) }, 
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) }, 
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) }, 
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },

  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },

  { path: 'activity-audit', loadChildren: () => import('./audit-log/audit-log.module').then(m => m.AuditLogModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
