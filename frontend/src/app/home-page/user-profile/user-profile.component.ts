import { Component, OnInit, Input } from '@angular/core';
import {AppService} from '../../services/app.service';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {NgModule} from '@angular/core';
import { IUserModel, IGroup} from '../home-page.model';
import {MatListModule} from '@angular/material/list';
import {MenuItem} from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  imports: [MatListModule],
  exports: [MatListModule]
})

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  fullName: string;
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  userID: string;
  items: any;
  title: string;
  urlID: string;
  display = false;
  displayEdit = false;
  type: string;
  isUsersProfile = false;
  groupform: FormGroup;
  signupForm: FormGroup;
  searchGroupName:string;
  searchedGroups:any[];

  ngOnInit() {
    this.userID = localStorage.getItem('currentUser');
    this.urlID = this.route.snapshot.paramMap.get('id');

    if(this.urlID == this.userID){
      this.isUsersProfile = true;
    }
    this.update();
  }


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private appService: AppService) { }


  showDialog(type) {
    this.type = type;
    if (type === 'create') {
      this.title = 'Create Group';
      this.groupform = this.fb.group({
        'groupName': new FormControl('', Validators.required),
        'description': new FormControl('')
      });
      }
      this.display = true;
    }
  showEditDialog() {

    this.appService.getUser(this.urlID).subscribe((data: IUserModel) => {
      this.fullName = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastname');
      this.firstname = localStorage.getItem('firstName');
      this.email =  localStorage.getItem('email');
      this.username = localStorage.getItem('username');
      this.signupForm = this.fb.group({
        'username': new FormControl(data.username, Validators.required),
        'firstname': new FormControl(data.firstname),
        'lastname': new FormControl(data.lastname),
        'email': new FormControl(data.email, Validators.email)
      });
      this.displayEdit = true;
    }, error2 => {
      this.fullName = 'Janani Sundaresan';
      this.email = 'janani.sundaresan@gmail.com';
      this.userID = String(100);
      this.username = 'janu';
    });
  }
    cancel() {
      this.display = false;
      this.displayEdit = false;
    }


    createGroup(value) {

        const group = {
          groupName: value.groupName,
          description: value.description,
          creatorName: this.username
        };


        if (this.type === 'create') {
          this.appService.createGroup(group, this.userID).then(function onSuccess(data) {
            this.display = false;
            this.items = data;
            console.log(data);
          });
        }
    }

  update() {

    this.appService.getUserGroups(this.urlID).subscribe((data) => {
      this.items = data;
      console.log(data);
    });
    this.appService.getUser(this.urlID).subscribe((data: IUserModel) => {
      this.fullName = data.firstname + ' ' + data.lastname;
      this.firstname = data.firstname;
      this.email =  data.email;
      this.username = data.username;
      localStorage.setItem('firstName', data.firstname);
      localStorage.setItem('lastname', data.lastname);
      localStorage.setItem('email', data.email);
      localStorage.setItem('username', data.username);
    }, error => {
     console.log(error);
    });
  }

  updateUser(value) {
    const user =  {
      id: localStorage.getItem('currentUser'),
      username: value.username,
      firstname: value.firstname,
      lastname: value.lastname,
      email: value.email
    };

    this.appService.updateUser(user).subscribe(userID => {
      this.update();
      this.displayEdit = false;
    }), error => {
      console.error(error.message.body);
    };
  }


}
