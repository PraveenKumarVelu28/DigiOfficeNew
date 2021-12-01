import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/Pages/header/header.component';
import { CostcenterComponent } from './costcenter/costcenter.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeComponent } from './employee/employee.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { PayrollComponent } from './payroll/payroll.component';

const routes: Routes = [
  { path: 'Header', component: HeaderComponent },
  { path: 'Payroll', component: PayrollComponent },
  { path: 'Employee', component: EmployeeComponent },
  {path:'Costcenter',component: CostcenterComponent},
  {path:'GeneralLedger',component: GeneralLedgerComponent},
  {path:'Departments',component: DepartmentsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
