import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-business-login',
  templateUrl: './business-login.component.html',
  styleUrls: ['./business-login.component.scss']
})
export class BusinessLoginComponent implements OnInit {

  nav = {
    home:'../../for-people',
    what_is_noba:'../../for-people/what-is-noba',
    business_login:'../business-login',
    business:'/for-business'
  }

  constructor() { }

  ngOnInit() {
  }

}
