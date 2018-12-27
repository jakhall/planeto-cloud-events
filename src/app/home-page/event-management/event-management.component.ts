import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {v4 as uuid} from 'uuid';
import {AppService} from '../../services/app.service';
import {IEvent, IUserModel} from '../home-page.model';
import {range} from 'rxjs';
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {SplitButtonModule} from 'primeng/splitbutton';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss']
})
export class EventManagementComponent implements OnInit {
  @Input() userID: number;
  title: string;
  type: string;

  events: any[];
  otherEvents:any[];
  myEvents:any[];
  joinedEvents:any[];

  event: any;

  display: boolean = false;
  displayEventDialog: boolean = false;

  showJoinedEvents:boolean = true;
  showMyEvents:boolean = true;

  userform: FormGroup;
  cols: any[];
  dialogMessage:string;
  items: MenuItem[]
  fullName: string;
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  showDialog(type) {
    this.type = type;
    if (this.type === 'create') {
      this.title = 'Create Event';
      this.userform = this.fb.group({
        'name': new FormControl('', Validators.required),
        'start': new FormControl('', Validators.required),
        'end': new FormControl('', Validators.required),
        'description': new FormControl('', Validators.required)
      });
    }else if (this.type === 'modify') {
      this.title='Modify Event';
      this.userform = this.fb.group({
        'name': new FormControl(this.event.name, Validators.required),
        'start': new FormControl(this.event.start, Validators.required),
        'end': new FormControl(this.event.end, Validators.required),
        'description': new FormControl(this.event.description, Validators.required)
      });
    }

    this.display = true;
  }

  constructor(private fb: FormBuilder, private appService: AppService, private datePipe: DatePipe,
              private router: Router) {
  }

  showEventManagementDialog(type){
    let eventName = this.event.name;
    this.type = type;
    if ( type === 'join'){
      this.dialogMessage = "Are you sure to join the event: "+eventName;
    }else if (type === 'quit') {
      this.dialogMessage = "Are you sure to quit the event: "+eventName;
    }else if (type === 'del') {
      this.dialogMessage = "Are you sure to delete the event: "+eventName;
    }

    this.displayEventDialog = true;
  }

  ngOnInit() {
    this.appService.getUser(this.userID).subscribe((data: IUserModel) => {
      this.fullName = data.firstname + ' ' + data.lastname;
      this.email = data.email;
      this.userID = data.userID;
      this.username = data.username
      localStorage.setItem("firstName",data.firstname);
      localStorage.setItem("lastname",data.lastname);
      localStorage.setItem("email",data.email);
      localStorage.setItem("username",data.username);

    }, error2 => {
      this.fullName = 'Janani Sundaresan';
      this.email = 'janani.sundaresan@gmail.com';
      this.userID = 100;
      this.username = 'janu'
    });
    this.items = [
      {label: 'MyEvents', icon: 'pi pi-info',command:() => this.showEvents(this.items[0].label)},
      {label: 'JoinedEvents', icon: 'pi pi-info',command:() => this.showEvents(this.items[1].label)},
      {label: 'OtherEvents', icon: 'pi pi-info',command:() => this.showEvents(this.items[2].label)}
    ];
    this.events = new Array();
    this.myEvents = new Array();
    this.otherEvents = new Array();
    this.joinedEvents = new Array();
    let event_te = {
      name: 'te',
      description: 'event',
      start: new Date('Tue Dec 04 2018 00:00:00 GMT+0000 (Greenwich Mean Time)'),
      end: new Date('Wed Dec 05 2018 00:00:00 GMT+0000 (Greenwich Mean Time)'),
      userID: '101',
      eventID: '0001'
    };
    let event_jane = {
      name: 'jane',
      description: 'event',
      start:new Date('Tue Dec 04 2018 00:00:00 GMT+0000 (Greenwich Mean Time)'),
      end: new Date('Wed Dec 05 2018 00:00:00 GMT+0000 (Greenwich Mean Time)'),
      userID: '100',
      eventID: '0000'
    }
    let event_temp = {
      name: 'temp',
      description: 'event',
      start:new Date('Tue Dec 04 2018 00:00:00 GMT+0000 (Greenwich Mean Time)'),
      end: new Date('Wed Dec 05 2018 00:00:00 GMT+0000 (Greenwich Mean Time)'),
      userID: '1001',
      eventID: '0002'
    }
    this.myEvents.push(event_jane);
    this.otherEvents.push(event_temp);
    this.joinedEvents.push(event_te);
    this.events = this.myEvents;

    this.cols = [
      {field: 'name', header: 'EventName'},
      {field: 'description', header: 'Description'},
      {field: 'start', header: 'Start Date/Time'},
      {field: 'end', header: 'End Date/Time'},
    ];
  }

  showEvents(type) {
    if (type==='MyEvents'){
      this.events = this.myEvents;
      this.showMyEvents = true;
    }else {
      this.showMyEvents = false;
      if (type === 'JoinedEvents') {
        this.events = this.joinedEvents;
        this.showJoinedEvents = true;
      }else if (type === 'OtherEvents') {
        this.events = this.otherEvents;
        this.showJoinedEvents = false;
      }
    }
  }

  choice(value) {
    if (value==='yes') {
      let choice = {
        userID: this.userID,
        eventID: this.event.eventID
      }
      if (this.type === 'join') {
        this.appService.joinEvent(choice).subscribe(data => {
          this.joinedEvents.push(this.event);
          this.otherEvents = this.otherEvents.filter(event =>{
            return event.eventID !==this.event.eventID;
          });
        }, error => {
          console.error(error.message);
        });

      }else if (this.type === 'quit') {
        this.appService.quitEvent(choice).subscribe(data => {

          this.otherEvents.push(this.event);
          console.log(this.event.eventID);
          this.joinedEvents = this.joinedEvents.filter(event =>{
            return event.eventID !==this.event.eventID;
          });
        }, error => {
          console.error(error.message);
        });

      }else if (this.type === 'del') {

        //TODO del others joined event
        this.appService.delEvent().subscribe(data => {

          this.myEvents.filter(event =>{
            return event.eventID !== this.event.eventID;
          });
          alert('del event success');
        }, error => {
          console.error(error.message);
        });
      }
    }
    this.displayEventDialog = false;

  }

  onSubmit(value) {
    let event = {
      name: value.name,
      description: value.description,
      start: value.start,
      end: value.end,
      userID: this.userID
    };
    console.log(event);

    if (this.type === 'create') {
      this.appService.createEvent(event).subscribe(data => {
        this.myEvents.push(event);
        this.display = false;
        alert('create event success');
      }, error => {
        console.error(error.message);
      });
    }

  }

  onModify(value){
    let event = {
      name: value.name,
      description: value.description,
      start: value.start,
      end: value.end,
      userID: this.userID,
      eventID: this.event.eventID
    };
    this.appService.updateEvent(event).subscribe(data => {
      this.event = event;
      this.display = false;
      alert('update event success');
    }, error => {
      console.error(error.message);
    });
  }

  onCancel() {
    this.display = false;
  }

}
