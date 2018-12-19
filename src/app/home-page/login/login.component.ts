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
    this.loginForm = this.fb.group({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('',Validators.required),
    });
  }

  login(value) {
    let username = value.username;
    let password = value.password;

    this.appService.login(username,password).subscribe(user =>{
      let currentUser = JSON.parse(String(user));
      localStorage.setItem("currentUser",currentUser.userID);
      this.router.navigate(['/home']);
    }), error => {
      console.log(error.message);
      this.router.navigate(['/home']);
    };

  }

}
