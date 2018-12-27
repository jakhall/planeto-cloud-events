import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {IUserModel} from '../home-page/home-page.model';
import {stringify} from 'querystring';
import { Observable, BehaviorSubject, of, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  result: any;
  baseUrl = 'https://planeto-app.appspot.com/api/';
  userUrl = this.baseUrl+'user/';
  public loggedIn: BehaviorSubject<boolean>;
  constructor(private http: HttpClient) {
    this.loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  }
  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken() : boolean {
    return !!localStorage.getItem('currentUser');
  }

  isLoggedIn() : Observable<boolean> {
    return this.loggedIn.asObservable();
  }
  login(username:string,password:string){
    const url = this.userUrl+'login';
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

  createUser(user) {
    const url = this.userUrl+'register';
    return this.http.post(url,user).pipe(
      map(res => {
        return res;
      }));
  }

  getUser(userID) {
    const uri = this.userUrl+userID; //userId will be dynamic

    return this.http.get(uri)
      .pipe(
        map(res => {
          return res;
        }));
  }



  getEvents(userID) {
    const uri = this.userUrl+userID+'/events'; //userId will be dynamic

    return this.http.get(uri)
      .pipe(
        map(res => {
          return res;
        }));
  }

  getJoinedEvents(userID) {
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
  delEvent(){
    return this.http.get(this.baseUrl+'test/getUser').pipe(map(res => {
      return res;
    }));
  }

  updateEvent(event) {
    return this.http.get(this.baseUrl+'test/getUser').pipe(map(res => {
      return res;
    }));
  }

  quitEvent(choice) {
    return this.http.get(this.baseUrl+'test/getUser').pipe(map(res => {
      return res;
    }));
  }

  joinEvent(choice) {
    return this.http.get(this.baseUrl+'test/getUser').pipe(map(res => {
      return res;
    }));
  }



  debug(){
    return this.http.get(this.baseUrl+'test/getUser').pipe(map(res => {
      return res;
    }));
  }


}
