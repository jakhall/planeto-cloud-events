import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService} from "../services/app.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  //if the user is not authenticated , the user is redirected to login page
  canActivate(): Promise<boolean> {
    //comment the code for local test
      return this.appService.sessionExists().then(data => {
        if(data == "Exists") {
          return true;
        }
        this.router.navigate(['launch']);
        return false;
      });

    }
  }
