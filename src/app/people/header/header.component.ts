import { Component, OnInit, HostListener, Inject, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
export class HeaderComponent implements OnInit {

  @Input() nav = null;

  constructor(@Inject(DOCUMENT) private document: Document) { }


  ngOnInit() {
    // $("#myModal").modal('show');
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
  scroll(el: HTMLElement) {
    this.toggleOut();
    el.scrollIntoView({behavior: 'smooth'});
  }

}
