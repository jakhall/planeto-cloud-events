import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {IUserModel} from '../home-page/home-page.model';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  result: any;
  baseUrl = 'http://localhost:8080/api/';
  userUrl = this.baseUrl + 'user/';
  eventUrl = this.baseUrl + 'event/';
  choiceUrl = this.baseUrl + 'choice/';

  constructor(private http: HttpClient) {

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
      })
    );
  }

  createUser(user) {
    const url = this.userUrl + 'register';
    return this.http.post(url, user).pipe(
      map(res => {
        return res;
      }));
  }

  getUser(userID) {
    const url = this.userUrl + userID; //userId will be dynamic

    return this.http.get(url)
      .pipe(
        map(res => {
          return res;
        }));
  }

  createEvent(event,userID) {

    const uri = this.eventUrl + userID;

    return this.http.post(uri, event)
      .pipe(
        map(res => {
          return res;
        }));
  }

  updateEvent(event) {
    const url = this.eventUrl + event.eventID;

    return this.http.put(url, event)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  deleteEvent(userID, eventID) {
    const url = this.eventUrl + userID + '/' + eventID;

    return this.http.delete(url)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  getEvents(userID, type) {
    const url = this.eventUrl + type + '/' + userID; //userId will be dynamic

    return this.http.get(url)
      .pipe(
        map(res => {
          return <Array<any>>res;
        }));
  }

  getEventInfo(eventId) {
    const url = this.eventUrl + eventId; //userId will be dynamic

    return this.http.get(url)
      .pipe(
        map(res => {
          return String(res);
        }));
  }

  createChoice(choice,userID) {
    const url = this.choiceUrl+userID;

    return this.http.post(url,choice)
      .pipe(
        map(res => {
          return res;
        }));
  }

  updateChoice(choice) {
    const url = this.choiceUrl+choice.eventID;

    return this.http.put(url,choice)
      .pipe(
        map(res => {
          return res;
        }));
  }

  deleteChoice(userID,eventID) {
    const url = this.choiceUrl + userID + '/' + eventID;

    return this.http.delete(url)
      .pipe(
        map(res => {
          return res;
        })
      );
  }


  debug() {
    return this.http.get(this.baseUrl + 'test/getUser').pipe(map(res => {
      return res;
    }));
  }


}
