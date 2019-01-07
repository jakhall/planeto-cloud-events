import { Component, OnInit } from '@angular/core';
import {IUserModel} from '../home-page.model';
import {Router} from '@angular/router';
import {AppService} from '../../services/app.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {
  constructor(private router: Router,
              private appService : AppService) { }

  ngOnInit() {
    if(localStorage.getItem("currentUser")) {
      this.router.navigate(['/home']);
    }
  }

}
