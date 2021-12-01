import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../Pages/header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { CostcenterComponent } from './costcenter/costcenter.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PayGroupComponent } from './pay-group/pay-group.component';
import { OTRatesComponent } from './otrates/otrates.component';
import { AdjustmentsComponent } from './adjustments/adjustments.component';
import { CompanyAdjustmentsComponent } from './company-adjustments/company-adjustments.component';
import { PhilHealthComponent } from './phil-health/phil-health.component';
import { SSSComponent } from './sss/sss.component';
import { GovernmentComponent } from './government/government.component';
import { USERSComponent } from './users/users.component';
import { AdolfoComponent } from './adolfo/adolfo.component';

import { HelpComponent } from './help/help.component';
import { SproutPayrollComponent } from './sprout-payroll/sprout-payroll.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    CostcenterComponent,
    GeneralLedgerComponent,
    DepartmentsComponent,
    PayGroupComponent,
    OTRatesComponent,
    AdjustmentsComponent,
    CompanyAdjustmentsComponent,
    PhilHealthComponent,
    SSSComponent,
    GovernmentComponent,
    USERSComponent,
    AdolfoComponent,
    HelpComponent,
    SproutPayrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
