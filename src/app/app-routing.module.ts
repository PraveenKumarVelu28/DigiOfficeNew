import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyProfileComponent } from './company-profile/company-profile.component';

const routes: Routes = [

  {path:"",redirectTo:"CompanyProfile",pathMatch:"full"},
  {
    path:"CompanyProfile", component: CompanyProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
