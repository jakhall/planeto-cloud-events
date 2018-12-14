import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppHeaderComponent implements OnInit {
  items: MenuItem[];
  @Input() fullName: string;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Event Calendar',
        routerLink: '/home'
      }
    ];
  }

}
