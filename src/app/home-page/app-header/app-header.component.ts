import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {MenuItem} from "primeng/api";
import {IUserModel} from '../home-page.model';
import {AppService} from "../../services/app.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppHeaderComponent implements OnInit {
  items: MenuItem[];
  currentUser:string;
  isLoggedIn : Observable<boolean>;
  constructor(private appService: AppService) {
    this.isLoggedIn = this.appService.isLoggedIn();
  }

  ngOnInit() {
    this.currentUser = localStorage.getItem('username') || '';
    this.items = [
      {
        label: 'Event Calendar',
        routerLink: '/home'
      }
    ];
  }


  cleanUser(){
    this.currentUser = null;
    this.appService.loggedIn.next(false);
    localStorage.clear();
  }

}
