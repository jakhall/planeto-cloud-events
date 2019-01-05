import { Component, OnInit, Input } from '@angular/core';
import {AppService} from "../../services/app.service";
import {NgModule} from '@angular/core';
import { IUserModel, IGroup} from "../home-page.model";
import {MatListModule} from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  imports: [MatListModule],
  exports: [MatListModule]
})

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.scss']
})

export class GroupComponent implements OnInit {
  groupName: string;
  creatorName: string;
  description: string;
  urlID: string;
  currentUserID: string;
  group: any;
  users: any;
  constructor(private route: ActivatedRoute,
              private appService: AppService) { }

  ngOnInit() {
    //this.route.params.subscribe(params => {this.urlID = this.params['id'];});
    this.urlID = this.route.snapshot.paramMap.get('id');
    this.currentUserID = localStorage.getItem("currentUser");

    this.appService.getGroupInfo(this.urlID).subscribe((data: IGroup) => {this.group = data});

    /*
    this.groupName = data['groupName'],
    this.creatorName = data['creatorName'],
    this.description = data['description']
    */

    this.appService.getGroupUsers(this.urlID).subscribe(data => {
      this.users = data;
    });

  }


}
