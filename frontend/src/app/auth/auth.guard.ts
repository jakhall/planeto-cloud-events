import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  //if the user is not authenticated , the user is redirected to login page
  canActivate(): boolean {
    //comment the code for local test

    if (!localStorage.getItem("currentUser")) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
