import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {IUserModel, IGroup} from '../home-page/home-page.model';
import {stringify} from 'querystring';
import { Observable, BehaviorSubject, of, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  result: any;
  // deploy url

  // baseUrl = 'https://backend-dot-planeto-app.appspot.com/api/';

  // for local test url
  baseUrl = 'http://localhost:8080/api/';

  userUrl = this.baseUrl + 'user/';
  eventUrl = this.baseUrl + 'event/';
  groupUrl = this.baseUrl + 'group/';
  choiceUrl = this.baseUrl + 'choice/';
  public loggedIn: BehaviorSubject<boolean>;
  public userData: BehaviorSubject<string>;
  constructor(private http: HttpClient) {
    this.loggedIn = new BehaviorSubject<boolean>(this.hasToken());
    this.userData = new BehaviorSubject<string>(null);
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
  userDataAvailable() : Observable<string> {
    return this.userData.asObservable();
  }

  login(username: string, password: string) {
    const url = this.userUrl + 'login';
    let user = {
      username: username,
      password: password
    };
    return this.http.post(url, user).pipe(
      map(res => {
        return res;
      }),
      catchError(this.handleError('login', []))
    );
  }

/*
  getUserGroups(userID){
    const url = this.userUrl + userID + '/groups';
    return this.http.get(url).pipe(
      map(res => {
        return <Array<any>>res;
      }));
  }
*/


  getUserGroups(userID){
    const url = this.userUrl + userID + '/groups';
    return this.http.get(url).toPromise();
  }

  createUser(user) {
    const url = this.userUrl + 'register';
    return this.http.post(url, user).pipe(
      map(res => {
        return res;
      }),
      catchError(this.handleError('register', [])));
  }

  getUser(userID) {
    const url = this.userUrl + userID; //userId will be dynamic

    return this.http.get(url)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.handleError('login', [])));
  }

  createEvent(event,userID) {

    const uri = this.eventUrl + userID;

    return this.http.post(uri, event)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.handleError('login', [])));
  }

  updateEvent(event) {
    const url = this.eventUrl + event.eventID;

    return this.http.put(url, event)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.handleError('login', []))
      );
  }

  deleteEvent(userID, eventID) {
    const url = this.eventUrl + userID + '/' + eventID;

    return this.http.delete(url)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.handleError('login', []))
      );
  }

  getEvents(userID, type) {
    const url = this.userUrl + userID + "/events";
    return this.http.get(url)
      .pipe(
        map(res => {
          return <Array<any>>res;
        }),
        catchError(this.handleError('login', [])));

  }

  getEventInfo(eventId) {
    const url = this.eventUrl + eventId;

    return this.http.get(url)
      .pipe(
        map(res => {
          return String(res);
        }));
  }

  getGroupInfo(groupId) {
    const url = this.groupUrl + groupId;
    return this.http.get<IGroup>(url);
  }

  getGroupUsers(groupId) {
    const url = this.groupUrl + groupId + "/users";
    return this.http.get(url).pipe(map(res => {return <Array<any>>res;}));
  }

  createGroup(group, userID) {
    var url = this.userUrl + userID + "/group";
    return this.http.post(url, group).toPromise();
  }

  getGroupEvents(groupID){
    let url = this.groupUrl+groupID+'/events';
    return this.http.get(url).pipe(map(res => {return <Array<any>>res;}));
  }

  createGroupEvent(eventID,groupID) {
    let url = this.groupUrl+groupID+'/event/'+eventID;
    return this.http.post(url,"").pipe(map(res=> {return res;}));
  }

  deleteGroupEvent(eventID,groupID) {
    let url = this.groupUrl+groupID+'/event/'+eventID;
    return this.http.delete(url).pipe(map(res=> {return res;}));
  }






  searchByUsername(username:string) {
    const url = this.baseUrl+'search'+'/'+username;

    return this.http.get(url)
      .pipe(
        map(res => {
          return <Array<any>>res;
        }),
        catchError(this.handleError('searchByUsername', [])));

  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  debug() {
    return this.http.get(this.baseUrl + 'test/getUser').pipe(map(res => {
      return res;
    }));
  }


}
