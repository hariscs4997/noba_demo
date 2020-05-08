import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-business-header',
  templateUrl: './business-header.component.html',
  styleUrls: ['./business-header.component.scss'],
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
export class BusinessHeaderComponent implements OnInit {
 
  @Input() nav = null;

  constructor() { }

  ngOnInit() {
  }

  menuState:string = 'out';
  position = null;
  toggleIn(){
    this.menuState = 'in';
    this.position = "top";
  }
  toggleOut(){
    this.menuState = 'out';
    this.position = 'bottom';
  }

}
