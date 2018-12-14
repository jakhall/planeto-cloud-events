import { Component, OnInit } from '@angular/core';
import { AppService} from "../services/app.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getUsers().subscribe((data) => {
console.log(data);
    });
  }

}
