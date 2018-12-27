import { Component, OnInit } from '@angular/core';
import {IUserModel} from '../home-page.model';
import {Router} from '@angular/router';
import {AppService} from '../../services/app.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private router: Router,
              private fb:FormBuilder,
              private appService : AppService) { }

  ngOnInit() {
    if(localStorage.getItem("currentUser")) {
      this.router.navigate(['/home']);
    }
    this.loginForm = this.fb.group({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('',Validators.required),
    });
  }

  login(value) {
    let username = value.username;
    let password = value.password;

    this.appService.login(username,password).subscribe( userID =>{
      localStorage.setItem("currentUser",String(userID));
      this.appService.loggedIn.next(true);
      this.router.navigate(['/home']);
    }), error => {
      console.error(error.message.body);
      this.router.navigate(['/home']);
    };

  }

  debug(){
    this.appService.debug().subscribe(res =>{
      console.log(res);
    }),error =>{
      console.log(error.message);
    }
  }

}
