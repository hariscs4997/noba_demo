import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-what-is-noba',
  templateUrl: './what-is-noba.component.html',
  styleUrls: ['./what-is-noba.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)',
        'z-index': '2',
        width: '100%'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('0.5s ease-in-out')),
      transition('out => in', animate('0.5s ease-in-out'))
    ]),
  ]
})
export class WhatIsNobaComponent implements OnInit {

  nav = {
    home : '/',
    what_is_noba: '../what-is-noba',
       register_interest:'../register-interest',
       business:'../../for-business',
       app_route:'../app'

  }

  constructor() { }

  ngOnInit() {
  }
}
