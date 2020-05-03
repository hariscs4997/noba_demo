import { Component, OnInit, Output, EventEmitter,HostListener, Inject } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import * as uuid from 'uuid';


declare var $:any;
declare var $window:any;

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  nav = {
    home : '/',
    what_is_noba: './what-is-noba',
    register_interest:'./register-interest',
    business:'../for-business'
  }
  videoShow: boolean=false;
  imgshow: boolean=true;

  constructor(@Inject(DOCUMENT) private document: Document,private cookie: CookieService) {

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
      // if ( $(window).scrollTop() >= scrollTop ) {
          
      // } else {
      //     $("#scroll-down").removeClass("top1");
      // }
  });
  
  // $(window).scroll(function() {    
  //     if ($(window).scrollTop() >= 150) {
  //         $("#scroll-down").addClass("top2");
  //     } else {
  //         $("#scroll-down").removeClass("top2");
  //     }
  // });
     
  }









  
 
  ngOnInit() {

    if(this.cookie.get("userid")){

   } 
   else{   
    $("#myModal").modal('show');
   }
  }

  clickkar(){
    
    this.videoShow=true;
    this.imgshow=false;
  }

  cookie_value(){
    console.log('a')
    this.cookie.set("userid",uuid.v4(),365)
    $("#myModal").modal('hide');

  }
}


