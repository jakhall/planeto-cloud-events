import { Component, OnInit, Input } from '@angular/core';
import {AppService} from "../../services/app.service";
import {NgModule} from '@angular/core';
import { IUserModel, IGroup} from "../home-page.model";
import {MatListModule} from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
  group: IGroup;
  users: any[];
  Events: any[];
  event:any;
  options:any;

  groupCreator:string;

  eventForm:FormGroup;
  groupForm:FormGroup;

  dialogTitle:string;
  displayDialog:boolean;
  displayMessageDialog:boolean;
  dialogMessage:string;
  displayGroupDialog:boolean = false;
  type:any;

  userInGroup:boolean = false;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private appService: AppService) { }

  eventClick(calEvent) {
    this.event = {
      name: calEvent.event.title,
      description: calEvent.event.def.extendedProps.description,
      start: calEvent.event.start,
      end: calEvent.event.end,
      userID: calEvent.event.def.extendedProps.userID,
      eventID: calEvent.event.def.extendedProps.eventID,
      creatorName: calEvent.event.def.extendedProps.creatorName
    };

    console.log("currentUserID:"+this.currentUserID);
    console.log("eventUserID:"+this.event.userID);
  }

  ngOnInit() {
    //this.route.params.subscribe(params => {this.urlID = this.params['id'];});
    this.urlID = this.route.snapshot.paramMap.get('id');
    this.currentUserID = localStorage.getItem("currentUser");

    this.initGroupInfo();
    this.initGroupEvents();
    this.initGroupUsers();


    this.options = {
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      eventClick: (calEvent) => {
        console.log('Selected Event: ', calEvent);
        this.eventClick(calEvent);
      },
    };

  }

  initGroupInfo() {
    this.appService.getGroupInfo(this.urlID).subscribe((data: IGroup) => {
      this.group = data;
      console.log(this.group);
      this.groupCreator = String(this.group.userID);
    });

  }

  initGroupUsers(){
    this.appService.getGroupUsers(this.urlID).subscribe(data => {
      this.users = data;
      this.currentUserInGroup();
    });
  }

  initGroupEvents() {

    this.appService.getGroupEvents(this.urlID).subscribe(data =>{
      this.Events = new Array();
      data.forEach( myEvent => {
        const event = {
          'title': myEvent.name,
          'start': myEvent.start,
          'end': myEvent.end,
          'description': myEvent.description,
          'eventID': myEvent.eventID,
          'userID': myEvent.userID,
          'creatorName':myEvent.creatorName
        };
        this.Events.push(event);
      });
    });
  }

  currentUserInGroup(){
    if (this.users) {
      // bad code
      let inGroup:boolean = false;
      this.users.forEach(groupUser =>{
        if (String(groupUser.userID) === this.currentUserID){
          inGroup = true;
        }
      });
      this.userInGroup = inGroup;
    }
  }

  showManagementDialog(type) {
    this.type=type;
    if (type === 'del') {
      let eventName = this.event.name;
      this.dialogMessage = 'Are you sure to delete the event: ' + eventName;
      this.displayMessageDialog = true;
    } else if(type ==='join'){
      this.dialogMessage = 'Are you sure to join in the group: ' + this.group.groupName;
      this.displayMessageDialog = true;
    } else if(type==='quit'){
      this.dialogMessage = 'Are you sure to quit from the group: ' + this.group.groupName;
      this.displayMessageDialog = true;
    }

  }

  showDialog(type) {
    this.type = type;
    if (this.type === 'create') {
      this.dialogTitle = 'Create Event';
      this.eventForm = this.fb.group({
        'name': new FormControl('', Validators.required),
        'start': new FormControl('', Validators.required),
        'end': new FormControl('', Validators.required),
        'description': new FormControl('', Validators.required)
      });
    } else if (this.type === 'modify') {
      this.dialogTitle = 'Modify Event';
      this.eventForm = this.fb.group({
        'name': new FormControl(this.event.name, Validators.required),
        'start': new FormControl(this.event.start, Validators.required),
        'end': new FormControl(this.event.end, Validators.required),
        'description': new FormControl(this.event.description, Validators.required)
      });
    }

    this.displayDialog = true;
  }

  showGroupDialog() {

    this.groupForm = this.fb.group({
      'GroupName': new FormControl(this.group.groupName, Validators.required),
      'Description': new FormControl(this.group.description, Validators.required),
    });
    this.displayGroupDialog = true;
  }

  submitGroup(value) {
    let group = {
      'groupName':value.GroupName,
      'description':value.Description
    }
    this.appService.updateGroup(this.urlID,group).subscribe(groupID =>{
      console.log("update group:"+groupID);
      this.displayGroupDialog = false;
      this.initGroupInfo();
    }),error =>{
      console.error(error.message);
    };
  }


  onCancel() {
    this.displayDialog = false;
    this.displayGroupDialog = false;
  }

  onSubmit(value) {
    const event = {
      name: value.name,
      description: value.description,
      start: value.start,
      end: value.end,
      userID: this.currentUserID,
      eventID: null
    };
    if (this.type === 'create') {
      // create event
      this.appService.createEvent(event, this.currentUserID).subscribe(eventID => {
        this.displayDialog = false;


        // add this event to groupEvent
        this.appService.createGroupEvent(eventID,this.urlID).subscribe( groupEventID =>{
          console.log("create groupEvent: "+groupEventID);
        }), error => {
          console.error(error.message);
        };

        this.initGroupEvents();


      }, error => {
        console.error(error.message);
      });


    }else if( this.type==='modify') {
      event.eventID = this.event.eventID;
      this.appService.updateEvent(event).subscribe(data => {
        this.displayDialog = false;
        this.initGroupEvents();

      }, error => {
        console.error(error.message);
      });
    }
  }

  choice(value) {
    if (value === 'yes') {
      if (this.type === 'del') {
        this.appService.deleteEvent(this.currentUserID, this.event.eventID).subscribe(eventID => {

          // delete groupEvent
          this.appService.deleteGroupEvent(this.event.eventID,this.urlID).subscribe(res =>{
            console.log("delete groupEvent:"+this.event.eventID);
            this.initGroupEvents();
          });
        }, error => {
          console.error(error.message);
        });
      }
      else if(this.type === 'join') {
        let userRole = {
          'role':'normalUser'
        };

        this.appService.addGroupUser(this.urlID,this.currentUserID,userRole).subscribe( res=>{
          console.log("join group successfully:"+res);
          this.initGroupUsers();
        });
      }
      else if(this.type === 'quit') {
        this.appService.removeGroupUser(this.urlID,this.currentUserID).subscribe(res =>{
          console.log("quit from the group successfully:"+res);
          this.initGroupUsers();
        }), error=>{
          console.error(error.message);
        };
      }

    }
    this.displayMessageDialog = false;

  }


  editGroup() {

  }





}
