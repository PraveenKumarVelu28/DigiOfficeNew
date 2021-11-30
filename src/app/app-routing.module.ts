import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/Pages/header/header.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: 'Header', component: HeaderComponent },
  {
    path: "Help", component: HelpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
