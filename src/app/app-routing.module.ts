import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/Pages/header/header.component';
import { AdjustmentsComponent } from './adjustments/adjustments.component';
import { AdolfoComponent } from './adolfo/adolfo.component';
import { CompanyAdjustmentsComponent } from './company-adjustments/company-adjustments.component';
import { CostcenterComponent } from './costcenter/costcenter.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeComponent } from './employee/employee.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { GovernmentComponent } from './government/government.component';
import { OTRatesComponent } from './otrates/otrates.component';
import { PayGroupComponent } from './pay-group/pay-group.component';
import { PayrollComponent } from './payroll/payroll.component';
import { PhilHealthComponent } from './phil-health/phil-health.component';
import { SSSComponent } from './sss/sss.component';
import { USERSComponent } from './users/users.component';
import { HelpComponent } from './help/help.component';
import { SproutPayrollComponent } from './sprout-payroll/sprout-payroll.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';

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
