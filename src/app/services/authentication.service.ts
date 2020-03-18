import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Globals } from '../globals';
import { map } from 'rxjs/operators';


import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //private apiUrl: String = "http://localhost/coronaServer/login.php";

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private globals: Globals) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {  
    return this.currentUserSubject.value;
  }

  login(item) {
    return this.http.post<any>(`${this.globals.serverlink}login.php`, { item })
      .pipe(map(data => {
        // login successful if there's a jwt token in the response
        if (data && data.user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(data.user));
          this.currentUserSubject.next(data.user);
        }

        return data.user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}