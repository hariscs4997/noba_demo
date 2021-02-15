import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AdService } from '../ad.service';
import {Register} from '../ad'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-interest',
  templateUrl: './register-interest.component.html',
  styleUrls: ['./register-interest.component.scss'],
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
export class RegisterInterestComponent implements OnInit {
  form: FormGroup;
 registration:Register = new Register();
 submitted = false;
  nav = {
    home : '/',
    what_is_noba: '../what-is-noba',
       register_interest:'../register-interest',
       business:'../../for-business',
       app_route:'../app',
       connect:'../service'


  }
  registrationform = new FormGroup({
    Title        : new FormControl('',[Validators.required]),
    Firstname        : new FormControl('',[Validators.required]),
    Lastname        : new FormControl('',[Validators.required]),
    email        : new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    Phone        : new FormControl('',[Validators.required]),
    app       : new FormControl(''),
    service       : new FormControl(''),
    consulting : new FormControl(''),
    work_with_us : new FormControl(''),
    help        : new FormControl('',[Validators.required]),
    country        : new FormControl('',[Validators.required])
  });
  constructor(private fb: FormBuilder, private RegisterService:AdService,private router: Router,private toastr: ToastrService) {
  
  }
  ngOnInit() {
  }
newRegister(): void{
  this.submitted = false;
  this.registration = new Register();
}
save(){
  this.RegisterService.createRegistration(this.registration);
  this.registration =  new Register();
}
onSubmit(){
  this.submitted = true;
  if((<HTMLInputElement>document.querySelector('#app')).checked==false){
    this.registration.app = false;
  }
  if((<HTMLInputElement>document.querySelector('#service')).checked==false){
    this.registration.service = false;
  }
  if((<HTMLInputElement>document.querySelector('#consulting')).checked==false){
    this.registration.consulting= false;
  }
  if((<HTMLInputElement>document.querySelector('#work_with_us')).checked==false){
    this.registration.work_with_us= false;
  }
  this.save();
  this.toastr.success('Thank you for Registering.');
  this.router.navigate(['/']);
}
}
