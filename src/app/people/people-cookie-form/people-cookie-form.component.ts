import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common'; 
import { Inject }  from '@angular/core';
import * as uuid from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-cookie-form',
  templateUrl: './people-cookie-form.component.html',
  styleUrls: ['./people-cookie-form.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)',
        'z-index': '2',
        width: '100%',
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('0.5s ease-in-out')),
      transition('out => in', animate('0.5s ease-in-out'))
    ]),
  ]
})
export class PeopleCookieFormComponent implements OnInit {

  nav = {
    home : '/',
    what_is_noba: '../what-is-noba',
       register_interest:'../register-interest',
       business:'../../for-business',
       app_route:'../app'

  }

  constructor(@Inject(DOCUMENT) document,private cookie: CookieService,private router: Router) { }

  ngOnInit() {
  }
  save_values(){
    this.cookie.set("userid",uuid.v4(),365)
    this.cookie.set("preferences",(<HTMLInputElement>document.querySelector('input[name="choice"]:checked')).value,365)
    this.cookie.set("analytics",(<HTMLInputElement>document.querySelector('input[name="choice1"]:checked')).value,365)
    this.cookie.set("targeting",(<HTMLInputElement>document.querySelector('input[name="choice2"]:checked')).value,365)
    this.router.navigate(['/']);

  }
  
}
