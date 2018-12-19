import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IUserModel} from '../home-page.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  constructor(private appService:AppService,
              private router: Router,
              private fb:FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'username': new FormControl('', Validators.required),
      'firstname': new FormControl(''),
      'lastname': new FormControl(''),
      'email': new FormControl('',Validators.email),
      'password': new FormControl('',Validators.required),
      'checkPassword': new FormControl('',Validators.required)
    });
  }

  signup(value){
    let user =  {
      username:value.username,
      firstname:value.firstname,
      lastname:value.lastname,
      email:value.email,
      password:value.password
    };

    this.appService.createUser(user).subscribe(response =>{
      console.log(response);
      localStorage.setItem("currentUser",response);
      this.router.navigate(['/home']);
    }), error =>{
      console.log(error.message);
    }
  }

}
