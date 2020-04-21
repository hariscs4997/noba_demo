import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { BusinessLoginComponent } from './business-login/business-login.component';


const routes: Routes = [
  {path:'',component:BusinessComponent},
  {path:'business-login',component:BusinessLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
