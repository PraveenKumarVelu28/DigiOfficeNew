import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../Pages/header/header.component';
import { HelpComponent } from './help/help.component';
import { SproutPayrollComponent } from './sprout-payroll/sprout-payroll.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
