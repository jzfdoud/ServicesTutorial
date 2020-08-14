import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.class';

const baseurl = 'http://jzfdoudc.w30.wh-2.com/prsdbserver/api/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  list(): Observable<User[]> {
    return this.http.get(baseurl) as Observable<User[]>;
  }
}
