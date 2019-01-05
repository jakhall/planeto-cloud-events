import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {AppService} from '../../services/app.service';
import {IEvent, IUserModel} from '../home-page.model';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss']
})
export class EventManagementComponent implements OnInit {
  @Input() userID: number;
  title: string;
  type: string;
  options: any;
  calendarEvent: any;
  events: any[];
  otherEvents: any[];
  myEvents: any[];
  joinedEvents: any[];
  searchedEvents:any[];

  Events: any[];
  event: any;

  display = false;
  displayEventDialog = false;

  showJoinedEvents = true;
  showMyEvents = true;

  showCalendarView = true;

  userform: FormGroup;
  cols: any[];
  dialogMessage: string;
  items: MenuItem[];
  calendarItem: MenuItem[];
  fullName: string;
  email: string;
  firstname: string;
  lastname: string;
  username: string;

  searchUserName: string;
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
    } else if (this.type === 'modify') {
      this.title = 'Modify Event';
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

  showEventManagementDialog(type) {
    const eventName = this.event.name;
    this.type = type;
    if (type === 'join') {
      this.dialogMessage = 'Are you sure to join the event: ' + eventName;
    } else if (type === 'quit') {
      this.dialogMessage = 'Are you sure to quit the event: ' + eventName;
    } else if (type === 'del') {
      this.dialogMessage = 'Are you sure to delete the event: ' + eventName;
    }

    this.displayEventDialog = true;
  }
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
  }
  ngOnInit() {

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


    // test full calendar
    this.appService.getUser(this.userID).subscribe((data: IUserModel) => {
      this.fullName = data.firstname + ' ' + data.lastname;
      this.email = data.email;
      this.userID = data.userID;
      this.username = data.username;
      localStorage.setItem('firstName', data.firstname);
      localStorage.setItem('lastname', data.lastname);
      localStorage.setItem('email', data.email);
      localStorage.setItem('username', data.username);
      this.appService.loggedIn.next(true);
      this.appService.userData.next(data.username);
      this.initEvents();

    }, error2 => {
      this.fullName = 'Janani Sundaresan';
      this.email = 'janani.sundaresan@gmail.com';
      this.userID = 100;
      this.username = 'janu';
    });
    this.items = [
      {label: 'MyEvents', icon: 'pi pi-info', command: () => this.showEvents(this.items[0].label)},
      {label: 'SearchOtherEvents', icon: 'pi pi-info', command: () => this.showEvents(this.items[1].label)}/*,
      {label: 'JoinedEvents', icon: 'pi pi-info', command: () => this.showEvents(this.items[1].label)},
      {label: 'OtherEvents', icon: 'pi pi-info', command: () => this.showEvents(this.items[2].label)}*/
    ];

    this.calendarItem = [
      {label: 'EventsTableView', command: () => {
          this.CalendarView(false);
        }},
      {label: 'EventsCalendarView', command: () => {
          this.CalendarView(true);
        }}
    ];

    this.cols = [
      {field: 'name', header: 'EventName'},
      {field: 'description', header: 'Description'},
      {field: 'start', header: 'Start Date/Time'},
      {field: 'end', header: 'End Date/Time'},
      {field: 'creatorName', header: 'creatorName'}
    ];
  }

  // build calendarView events based on userEvents
  initCalendarViewEvents() {

    this.Events = new Array();
    this.events.forEach( myEvent => {
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
  }

  // get events from database
  initEvents() {
    this.appService.getEvents(this.userID, 'userEvents').subscribe(data => {
      this.events = data;
      this.initCalendarViewEvents();

    }, error => console.error(error.message));
  }

  showEvents(type) {
    if (type === 'MyEvents') {
      // this.events = this.myEvents;
      this.showMyEvents = true;
      this.initEvents();
    } else if (type==='SearchOtherEvents'){
      if (!this.searchedEvents) {
        this.searchedEvents = this.events;
      }
      this.events = this.searchedEvents;
      this.initCalendarViewEvents();

      this.showMyEvents = false;
    } else {
/*      if (type === 'JoinedEvents') {
        this.events = this.joinedEvents;
        this.showJoinedEvents = true;
      } else if (type === 'OtherEvents') {
        this.events = this.otherEvents;
        this.showJoinedEvents = false;
      }*/
    }
  }

  choice(value) {
    if (value === 'yes') {
      const choice = {
        userID: this.userID,
        eventID: this.event.eventID,
        date: this.event.start
      };
      if (this.type === 'del') {
        this.appService.deleteEvent(this.userID, this.event.eventID).subscribe(eventID => {
          this.initEvents();
        }, error => {
          console.error(error.message);
        });
      }

    }
    this.displayEventDialog = false;

  }

  onSubmit(value) {
    const event = {
      name: value.name,
      description: value.description,
      start: value.start,
      end: value.end,
      userID: this.userID,
      eventID: null
    };
    // console.log(event);
    if (this.type === 'create') {
      this.appService.createEvent(event, this.userID).subscribe(eventID => {
        this.display = false;
        this.initEvents();
        /* console.log('get create event id:' + eventID);
         event['eventID'] = eventID;

         this.myEvents.push(event);
         this.joinedEvents.push(event);

         // console.log(event);
         this.display = false;

         let choice = {
           'eventID': eventID,
           'userID': this.userID,
           // TODO add choose join date,now just use the start date
           'date': event.start
         };

         this.appService.createChoice(choice, this.userID).subscribe(choiceID => {
           console.log('create choice ID is: ' + choiceID);
         }), error => {
           console.error(error.message);
         };

         alert('create event success');
       }, error => {
         console.error(error.message);
       });
 */

      }, error => {
        console.error(error.message);
      });

    }
  }

  onModify(value) {
    const event = {
      name: value.name,
      description: value.description,
      start: value.start,
      end: value.end,
      userID: this.userID,
      eventID: this.event.eventID
    };
    this.appService.updateEvent(event).subscribe(data => {
      this.display = false;
      this.initEvents();
/*      let itemIndex = this.myEvents.findIndex(item => item.eventID == event.eventID);
      this.myEvents[itemIndex] = event;

      itemIndex = this.joinedEvents.findIndex(item => item.eventID == event.eventID);
      this.joinedEvents[itemIndex] = event;

      this.afterOperstion();*/

      this.display = false;
    }, error => {
      console.error(error.message);
    });
  }

  searchByUserName() {
    if (this.searchUserName !== ''){
      this.appService.searchByUsername(this.searchUserName).subscribe(data =>{
          this.searchedEvents = data;
          this.events = this.searchedEvents;
          this.initCalendarViewEvents();
          // console.log(this.events);

      }), error => console.error(error.message);
    }
  }

  onCancel() {
    this.display = false;
  }

  CalendarView(show: boolean) {
    this.showCalendarView = show;
  }



}
