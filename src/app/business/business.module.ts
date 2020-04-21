import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business/business.component';
import { BusinessLoginComponent } from './business-login/business-login.component';
import { BusinessHeaderComponent } from './business-header/business-header.component';



@NgModule({
  declarations: [BusinessComponent, BusinessLoginComponent, BusinessHeaderComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { }
