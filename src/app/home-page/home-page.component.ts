import { Component, OnInit } from '@angular/core';
import { AppService} from "../services/app.service";
import { IUserModel} from "./home-page.model";
import {stringify} from 'querystring';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  fullName: string;
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  userID: number;
  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.userID = Number(localStorage.getItem("currentUser"));
    // comment for dev
    if (this.userID==null) {
      this.router.navigate(['/login'])
    }
    this.appService.getUser(this.userID).subscribe((data: IUserModel) => {
       this.fullName = data.username;
       this.email = data.email;
       this.userID = data.userID;
       this.username = data.username

    }, error2 => {
      this.fullName = 'Janani Sundaresan';
      this.email = 'janani.sundaresan@gmail.com';
      this.userID = 100;
      this.username = 'janu'
    });

  }


}
