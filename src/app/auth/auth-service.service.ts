import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError} from 'rxjs/operators';
import { JwtRequest } from './credential.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  baseUrl ="http://ipl2020analysis.herokuapp.com/";
  constructor(private http:HttpClient,private router: Router) { }

  getAuthenticated(username, password): Observable<JwtRequest> {
    const url = `${this.baseUrl}auth`;
    return this.http.post<JwtRequest>(url, { username: username, password: password }, { headers: { skip: 'true' } }).pipe(
      tap(token => this.storetoken(token)),
      catchError(err=>{
        return of(err);
      }));

  }

  storetoken(token) {
    localStorage.setItem('token', token['access_token']);
  }

  isUserLogedIn() {
    return !!this.getToken();
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

}
