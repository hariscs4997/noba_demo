import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-app',
  templateUrl: './get-app.component.html',
  styleUrls: ['./get-app.component.scss']
})
export class GetAppComponent implements OnInit {
  nav = {
    home : '/',
    what_is_noba: '../what-is-noba',
       register_interest:'../register-interest',
       business:'../../for-business',
       app_route:'../app',
       service:'../service'


  }

  constructor() {

   }

  ngOnInit() {
  }

}
