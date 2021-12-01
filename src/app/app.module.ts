import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../Pages/header/header.component';
import { EmployeeComponent } from '../Pages/employee/employee.component';
import { CostcenterComponent } from '../Pages/costcenter/costcenter.component';
import { GeneralLedgerComponent } from '../Pages/general-ledger/general-ledger.component';
import { DepartmentsComponent } from '../Pages/departments/departments.component';
import { PayGroupComponent } from '../Pages/pay-group/pay-group.component';
import { OTRatesComponent } from '../Pages/otrates/otrates.component';
import { AdjustmentsComponent } from '../Pages/adjustments/adjustments.component';
import { CompanyAdjustmentsComponent } from '../Pages/company-adjustments/company-adjustments.component';
import { PhilHealthComponent } from '../Pages/phil-health/phil-health.component';
import { SSSComponent } from '../Pages/sss/sss.component';
import { GovernmentComponent } from '../Pages/government/government.component';
import { USERSComponent } from '../Pages/users/users.component';
import { AdolfoComponent } from '../Pages/adolfo/adolfo.component';
import { HelpComponent } from '../Pages/help/help.component';
import { SproutPayrollComponent } from '../Pages/sprout-payroll/sprout-payroll.component';


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
