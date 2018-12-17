import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  result: any;
  baseUrl = 'http://localhost:8080/api/';
  userUrl = this.baseUrl+'user/';

  constructor(private http: HttpClient) {

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
