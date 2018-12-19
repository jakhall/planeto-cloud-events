import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {MenuItem} from "primeng/api";
import {IUserModel} from '../home-page.model';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppHeaderComponent implements OnInit {
  items: MenuItem[];
  currentUser:string;
  constructor() {
  }

  ngOnInit() {
    this.currentUser = localStorage.getItem("currentUser");
    this.items = [
      {
        label: 'Event Calendar',
        routerLink: '/home'
      }
    ];
  }


  cleanUser(){
    this.currentUser = null;
    localStorage.clear();
  }

}
