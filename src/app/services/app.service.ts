import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  result: any;

  constructor(private http: HttpClient) {
  }

  getUser(userID) {
    const uri = 'rest/profile/5632499082330112'; //userId will be dynamic

    return this.http.get(uri)
      .pipe(
        map(res => {
          return res;
        }));
  }

  getEvent(userID) {
    const uri = 'rest/event/100'; //userId will be dynamic

    return this.http.get(uri)
      .pipe(
        map(res => {
          return res;
        }));
  }

  createEvent(event) {
    const uri = 'rest/event';

    return this.http.post(uri, event)
      .pipe(
        map(res => {
          return res;
        }));
  }




}
