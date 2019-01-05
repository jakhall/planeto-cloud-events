import { Component, OnInit, Input } from '@angular/core';
import {AppService} from "../../services/app.service";
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {NgModule} from '@angular/core';
import { IUserModel, IGroup} from "../home-page.model";
import {MatListModule} from '@angular/material/list';
import {MenuItem} from 'primeng/api';


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
  display = false;
  type: string;
  groupform: FormGroup;

  showDialog(type){
    console.log("logged")
    this.type = type;
    if (this.type === 'create') {
      this.title = 'Create Group';
      this.groupform = this.fb.group({
        'Group Name': new FormControl('', Validators.required),
        'Description': new FormControl('', Validators.required)
      });
      }
      this.display = true;
    }


  test(){
    console.log("Clicked");
  }
  constructor(private fb: FormBuilder,
              private appService: AppService) { }

  ngOnInit() {
    this.userID = localStorage.getItem("currentUser");
    // if (this.userID==null) {
    //   this.router.navigate(['/login'])
    // }
    this.appService.getUser(this.userID).subscribe((data: IUserModel) => {
      this.fullName = localStorage.getItem("firstName") + ' ' + localStorage.getItem("lastname");;
      this.email =  localStorage.getItem("email");
      this.username = localStorage.getItem("username");
      }, error2 => {
      this.fullName = 'Janani Sundaresan';
      this.email = 'janani.sundaresan@gmail.com';
      this.userID = String(100);
      this.username = 'janu'
    });

    this.appService.getUserGroups(this.userID).subscribe(data => {
      this.items = data;
      console.log(data);
    });

  }

}
