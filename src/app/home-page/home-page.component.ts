import { Component, OnInit } from '@angular/core';
import { AppService} from "../services/app.service";
import { IUserModel} from "./home-page.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  fullName: string;
  email: string;
  firstname: string;
  lastname: string;
  userID: number;
  username: string;
  constructor(private appService: AppService) { }

  ndbUser:IUserModel;

  ngOnInit() {
    this.userID = 5632499082330112; //will be replaced by loggedIn user
    this.appService.getUser(this.userID).subscribe((data: IUserModel) => {
       this.fullName = data.firstname + ' ' + data.lastname;
       this.email = data.email;
       this.userID = data.userID;
       this.username = data.username

    }, error2 => {
      this.fullName = 'Janani Sundaresan';
      this.email = 'janani.sundaresan@gmail.com';
      this.userID = 100;
      this.username = 'janu'
    });
  }


  getNdbUser() {
    this.appService.getUser(5066549580791808).subscribe((res: IUserModel)=>{
      this.ndbUser = res;
    })

  }

}
