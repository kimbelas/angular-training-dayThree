import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  isLogged = new Subject();
  onHttpLogin = new Subject();
  subjectUsername = new Subject();
  onHttpGetProfile = new Subject();
  onHttpUpdateProfile = new Subject();

  constructor(private http: HttpClient) { }

  httpLogin(data) {
    const loginUrl = 'https://api-ubertickets.codestalk.dev/v1/auth/login';

    this.http.post(loginUrl, data)
    .subscribe((response: any)=>{
      console.log('HttpLogin', response);

      this.onHttpLogin.next(response);
    });
  }

  httpGetProfile() {
    const profileUrl = 'https://api-ubertickets.codestalk.dev/v1/users/my';
    const token = this.getToken();

    this.http.get(profileUrl, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    }).subscribe((response: any)=>{
      console.log('httpGetProfile', response);

      this.onHttpGetProfile.next(response);
    });
  }

  httpUpdateProfile(data) {
    const profileUrl = 'https://api-ubertickets.codestalk.dev/v1/users/my';
    const token = this.getToken();
    
    this.http.put(profileUrl, data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    }).subscribe((response: any)=>{
      console.log('httpUpdateProfile', response);
      this.onHttpUpdateProfile.next(response);
    });
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  checkLogStatus() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged.next(true);
    } else {
      this.isLogged.next(false);
    }
  }

  deleteToken() {
    localStorage.removeItem('token');
    this.isLogged.next(false);
  }

  getToken() {
    const token = localStorage.getItem('token');

    return token
  }
}
