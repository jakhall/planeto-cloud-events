import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";
import { IUserModel} from "../home-page.model";

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
  constructor(private appService: AppService) { }

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
  }

}
