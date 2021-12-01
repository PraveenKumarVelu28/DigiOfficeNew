import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../Pages/header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { CostcenterComponent } from './costcenter/costcenter.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { DepartmentsComponent } from './departments/departments.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    CostcenterComponent,
    GeneralLedgerComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
