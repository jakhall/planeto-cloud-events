import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-search-group',
  templateUrl: './search-group.component.html',
  styleUrls: ['./search-group.component.scss']
})
export class SearchGroupComponent implements OnInit {

  searchGroupName:string;
  searchedGroups:any[];
  userID:any;
  menuItems:MenuItem[];
  cols:any[];
  group:any;

  constructor(private appService: AppService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.userID = localStorage.getItem("currentUser");
    this.searchGroupName = this.route.snapshot.paramMap.get('groupName');
    this.menuItems = [
      {label: 'Groups', icon: 'pi pi-info', command: () => {}},
    ];

    this.cols = [
      {field: 'groupName', header: 'GroupName'},
      {field: 'description', header: 'Description'},
      {field: 'creatorName', header: 'CreatorName'}
    ];

    this.searchGroups();
  }




  searchGroups() {
    if (this.searchGroupName==='') {
      this.searchedGroups = [];
    }else{
      this.appService.searchGroups(this.searchGroupName).subscribe( groups =>{
        this.searchedGroups = groups;
        console.log(groups);
      }),error =>{
        console.log(error.message.body);
      }
    }
  }

}
