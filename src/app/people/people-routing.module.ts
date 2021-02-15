import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { RegisterInterestComponent } from './register-interest/register-interest.component';
import { PeopleCookieFormComponent } from './people-cookie-form/people-cookie-form.component';
import { WhatIsNobaComponent } from './what-is-noba/what-is-noba.component';
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import {GetAppComponent} from "./get-app/get-app.component"
import {ServiceComponent} from "./service/service.component"
const routes: Routes = [
  {path:"",component:PeopleComponent},
  {path:"register-interest",component:RegisterInterestComponent},
  {path:"cookie-form",component:PeopleCookieFormComponent},
  {path: "what-is-noba" , component:WhatIsNobaComponent},
  {path: "Cookies-Policy", component:TermAndConditionComponent},
  {path: "Privacy-Notice", component:PrivacyNoticeComponent},
  {path: "app", component:GetAppComponent},
  {path:"service",component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
