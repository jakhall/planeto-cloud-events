import { Component, OnInit } from '@angular/core';
import {IUserModel} from '../home-page.model';
import {Router} from '@angular/router';
import {AppService} from '../../services/app.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppHeaderComponent} from '../app-header/app-header.component';

@Component({
  selector: 'app-login',
  providers: [AppHeaderComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private router: Router,
              private fb:FormBuilder,
              private appService : AppService,
              private header : AppHeaderComponent) { }

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

    /*
    var res = this.appService.login(username,password)
    console.log(res)
    res.subscribe( (user: IUserModel) =>{

      this.header.reloadHeader();
    }), error => {
      console.error(error.message.body);
      this.router.navigate(['/home']);
    };

    */
    var self = this;
    this.appService.login(username, password).then(function onSuccess(data: IUserModel) {
      localStorage.setItem("currentUser",String(data.userID));
      self.header.setUser(data)
      self.router.navigate(['/home']);
    });
  }

  debug(){
    this.appService.debug().subscribe(res =>{
      console.log(res);
    }),error =>{
      console.log(error.message);
    }
  }

}
