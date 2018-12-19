import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {IUserModel} from '../home-page/home-page.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  result: any;
  baseUrl = 'http://localhost:8080/api/';
  userUrl = this.baseUrl+'user/';

  constructor(private http: HttpClient) {

  }

  login(username:string,password:string){
    const url = this.baseUrl+'login';
    let user = {
      username:username,
      password:password
    }
    return this.http.post(url,user).pipe(
      map(res=>{
        return res;
      })
    );
  }

  signup(username:string,firstname:string,lastname:string,email:string,password:string){
    const url = this.baseUrl+'register';
    let user = <IUserModel> {
      username:username,
      firstname:firstname,
      lastname:lastname,
      email:email,
      password:password
    }

  }

  getUser(userID) {
    const uri = this.userUrl+userID; //userId will be dynamic

    return this.http.get(uri)
      .pipe(
        map(res => {
          return res;
        }));
  }

  createUser(user) {
    const url = this.userUrl+'register';
    return this.http.post(url,user)
  }

  getEvents(userID) {
    const uri = this.userUrl+userID+'/events'; //userId will be dynamic

    return this.http.get(uri)
      .pipe(
        map(res => {
          return res;
        }));
  }

  createEvent(event) {

    let userID = event.userID;
    const uri = this.userUrl+userID+'/events';

    return this.http.post(uri, event)
      .pipe(
        map(res => {
          return res;
        }));
  }


}
