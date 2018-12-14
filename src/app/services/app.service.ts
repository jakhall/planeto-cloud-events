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

  getUsers() {
    const uri = 'rest/users';

    return this.http.get(uri)
      .pipe(
        map(res => {
          return res;
        }));
  }




}
