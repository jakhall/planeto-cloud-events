import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { DatePipe } from '@angular/common';
import {v4 as uuid} from 'uuid';
import {AppService} from "../../services/app.service";
import {IEvent} from "../home-page.model";

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
  event: any;
  display: boolean = false;
  userform: FormGroup;
  cols: any[];
  showDialog(type) {
    this.type = type;
    if(this.type === 'create') {
      this.title = 'Create Event';
      /*  {
          eventID: number;
          start: Date;
          end: Date;
          userID: number;
          name:string
        }*/
      this.userform = this.fb.group({
        'name': new FormControl('', Validators.required),
        'start': new FormControl('', Validators.required),
        'end': new FormControl('', Validators.required)
      });
    } else {
      this.title = 'View Project';
      this.userform = this.fb.group({
        'name': new FormControl({value: this.event.name, disabled: true}, Validators.required),
        'start': new FormControl({value: this.event.start, disabled: true}, Validators.required),
        'end': new FormControl({value: this.event.end, disabled: true}, Validators.required),
      });

    }
    this.display = true;
  }

  constructor(private fb: FormBuilder, private appService: AppService, private datePipe: DatePipe,
              private router: Router) {
  }

  ngOnInit() {

    this.cols = [
      { field: 'name', header: 'EventName' },
      { field: 'userID', header: 'UserID' },
      { field: 'start', header: 'Start Date/Time' },
      { field: 'end', header: 'End Date/Time' },
    ];
    this.updateEvent();
  }
  onSubmit(value) {
    let event = {};
    console.log(value);
    if(this.type === 'create') {
      event = {
        eventID: uuid(),
        start: value.start,
        end: value.end,
        userID: this.userID,
        name:value.name
      };
    }

    this.appService.createEvent(event).subscribe(data => {
      this.display = false;
    }, error => {
      console.log(error.message);
    });

  }

  updateEvent() {
    this.appService.getEvents(this.userID).subscribe((data: IEvent[]) => {
      this.events = data;
    });
  }
}
