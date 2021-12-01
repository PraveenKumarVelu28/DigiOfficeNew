import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/Pages/header/header.component';
import { HelpComponent } from './help/help.component';
import { SproutPayrollComponent } from './sprout-payroll/sprout-payroll.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';

const routes: Routes = [
  
  
  { path: 'Header', component: HeaderComponent },
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
