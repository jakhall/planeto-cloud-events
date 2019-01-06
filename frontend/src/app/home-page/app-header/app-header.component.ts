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
  currentUser: any;
  currentName: string;
  currentID: string;
  isLoggedIn : Observable<boolean>;
  constructor(private appService: AppService) {
    this.isLoggedIn = this.appService.isLoggedIn();
  }

  ngOnInit() {

    /*
    this.appService.userDataAvailable().subscribe((data) => {
      this.currentUser = data || localStorage.getItem('username');
    });

    */

    var self = this;
    this.appService.getSessionUser().then(function onSuccess(data: IUserModel) {
      self.currentUser = data;
    });

    this.items = [
      {
        label: 'Event Calendar',
        routerLink: '/home'
      }
     ];
    }

  public setUser(user){
    this.currentUser = user;
  }

  logout(){
    this.appService.logout();
    this.currentUser = null;
    this.appService.loggedIn.next(false);
    localStorage.clear();
  }

}
