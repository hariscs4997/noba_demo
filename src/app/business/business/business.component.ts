import { Component, OnInit, Output, EventEmitter, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var $:any;
declare var $window:any;

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  nav = {
    home:'../for-people',
    what_is_noba:'../for-people/what-is-noba',
    business_login:'./business-login',
    business:'./for-business'
  }
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    // $("#myModal").modal('show');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // if (document.body.scrollTop <= 100 || document.documentElement.scrollTop <= 100) {
    //   document.getElementById('scroll-down').classList.add('log-top1');
      
    // }
    // if (document.body.scrollTop <= 200 || document.documentElement.scrollTop <= 200) {
    //   document.getElementById('scroll-down').classList.add('log-top2');
      
    // }

    // else if(document.body.scrollTop > 51 || document.documentElement.scrollTop > 51){
    //   document.getElementById('scroll-down').classList.add('log-top2');
    //   console.log('2')
    // }
    // else if (document.body.scrollTop <= 50 || document.documentElement.scrollTop <= 50) {
    //   console.log("less")
    //   document.getElementById('scroll-down').classList.remove('log-top2');
      
    // }

    $(window).scroll(function() {
      var scrollTop= $(window).scrollTop();
      if(scrollTop == 0){
        $("#scroll-down").css('top','-36px');
      }
      else{
        $("#scroll-down").css('top',-scrollTop+'px');
      }
  });
     
  }

}
