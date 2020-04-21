import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people/people.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, } from  '@angular/material';
import { RegisterInterestComponent } from './register-interest/register-interest.component';
import { PeopleCookieFormComponent } from './people-cookie-form/people-cookie-form.component';
import { HeaderComponent } from './header/header.component';
import { WhatIsNobaComponent } from './what-is-noba/what-is-noba.component';
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PeopleComponent,
    RegisterInterestComponent,
    PeopleCookieFormComponent,
    HeaderComponent,
    WhatIsNobaComponent,
    TermAndConditionComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PeopleModule { }
