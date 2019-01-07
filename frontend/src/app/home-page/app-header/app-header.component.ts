import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {MenuItem} from "primeng/api";
import {IUserModel} from '../home-page.model';
import {AppService} from "../../services/app.service";
import { Observable, BehaviorSubject } from "rxjs";
import { DataSharingService } from './data-sharing.service';
import {Router} from '@angular/router';

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
  currentID: number;
  isLoggedIn : Observable<boolean>;
  constructor(private appService: AppService,
  private dataSharingService: DataSharingService) {
    this.isLoggedIn = this.appService.getSessionState();
    this.dataSharingService.currentUser.subscribe( value => {
        this.currentUser = value;
    });
  }


  ngOnInit() {


    var self = this;

    this.appService.getSessionUser().then(function onSuccess(data: IUserModel) {
      self.dataSharingService.currentUser.next(data);
      self.appService.updateSessionState();
    });


    this.items = [
      {
        label: 'Event Calendar',
        routerLink: '/home'
      }
     ];
    }

  public setUser(user){
    this.dataSharingService.currentUser.next(user);
    console.log("SETTING USER AS", user);
    console.log(this.currentUser);
    this.appService.updateSessionState();
    console.log("Session Updated");
  }

  searchGroups() {
    if (!this.searchGroupName || this.searchGroupName===""){
      this.searchGroupName = "group";
    }
    this.router.navigate(['/search/'+this.searchGroupName])
  }

  logout(){
    var self = this;
    this.dataSharingService.currentUser.next(null);
    this.appService.loggedIn.next(false);
    localStorage.clear();
    this.appService.logout().then(function onSuccess(res){
      self.appService.updateSessionState();
      }
    );

  }

}
