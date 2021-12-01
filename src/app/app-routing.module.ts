import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/Pages/header/header.component';
import { AdjustmentsComponent } from '../Pages/adjustments/adjustments.component';
import { AdolfoComponent } from '../Pages/adolfo/adolfo.component';
import { CompanyAdjustmentsComponent } from '../Pages/company-adjustments/company-adjustments.component';
import { CostcenterComponent } from '../Pages/costcenter/costcenter.component'
import { DepartmentsComponent } from '../Pages/departments/departments.component';
import { EmployeeComponent } from '../Pages/employee/employee.component';
import { GeneralLedgerComponent } from '../Pages/general-ledger/general-ledger.component';
import { GovernmentComponent } from '../Pages/government/government.component';
import { OTRatesComponent } from '../Pages/otrates/otrates.component';
import { PayGroupComponent } from '../Pages/pay-group/pay-group.component';
import { PayrollComponent } from '../Pages/payroll/payroll.component';
import { PhilHealthComponent } from '../Pages/phil-health/phil-health.component';
import { SSSComponent } from '../Pages/sss/sss.component';
import { USERSComponent } from '../Pages/users/users.component';
import { HelpComponent } from '../Pages/help/help.component';
import { SproutPayrollComponent } from '../Pages/sprout-payroll/sprout-payroll.component';
import { CompanyProfileComponent } from '../Pages/company-profile/company-profile.component';

const routes: Routes = [
  
  
  { path: 'Header', component: HeaderComponent },
  {path:'Header', component: HeaderComponent },
  {path:'Payroll', component: PayrollComponent },
  {path:'Employee', component: EmployeeComponent },
  {path:'Costcenter',component: CostcenterComponent},
  {path:'GeneralLedger',component: GeneralLedgerComponent},
  {path:'Departments',component: DepartmentsComponent},
  {path:'PayGroup',component: PayGroupComponent},
  {path:'OTRates',component:OTRatesComponent},
  {path:'Adjustments',component:AdjustmentsComponent},
  {path:'CompanyAdjustments',component:CompanyAdjustmentsComponent},
  {path:'PhilHealth',component:PhilHealthComponent},
  {path:'SSS',component:SSSComponent},
  {path:'Government',component:GovernmentComponent},
  {path:'USERS',component:USERSComponent},
  {path:'Adolfo',component:AdolfoComponent},
  {
    path: "Help", component: HelpComponent
  },
  {
    path: "Sproutpayroll", component: SproutPayrollComponent
  },
  { path: 'CompanyProfile', component: CompanyProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
