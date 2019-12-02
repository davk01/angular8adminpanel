import { Injectable } from '@angular/core';
import {FbAuthResponse, User} from 'src/app/shared/interfaces';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AuthService {
  public  error$: Subject<string> = new Subject<string>()
    constructor(private http: HttpClient){}
    get token(): string {
      const expDate = new  Date(localStorage.getItem('fb-token-exp'));
      if (new Date() > expDate) {
        this.logout();
        return null;
      }
        return localStorage.getItem('fb-token');
    }
    login (user: User): Observable<any> {
      user.returnSecureToken = true
       return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
       .pipe(
         tap(this.setToken),
         catchError(this.hendelError.bind(this))
       )
    }
    logout(){
      this.setToken(null)
    }
    isAuthemticated(): boolean {
        return !!this.token
    }
    private hendelError(error: HttpErrorResponse){
      const {message} = error.error.error
      switch (message) {
        case 'INVALID_EMAIL':
          this.error$.next('INVALID ')
          break
        case 'INVALID_PASSWORD':
          this.error$.next('INVALID P')
          break
        case  'EMAIL_NOT_FOUND':
          this.error$.next('INVALID N')
          break;
      }
      return throwError(error)
    }
    private setToken(response: FbAuthResponse | null) {
      if (response) {
        const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
        localStorage.setItem('fb-token' , response.idToken );
        localStorage.setItem('fb-token-exp' , expDate.toString());
      } else {
        localStorage.clear();
      }
    }
}

