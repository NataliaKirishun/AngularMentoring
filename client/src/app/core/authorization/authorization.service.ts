import { Injectable } from '@angular/core';
import { ILoginUserData, User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_GATEWAY, L_STORAGE_AUTH_KEY, L_STORAGE_USER_KEY } from '../../config/services.config';

const AUTH_SERVICE_HOST = `${API_GATEWAY}/auth`;

@Injectable()
export class AuthorizationService {

  constructor(
    private http: HttpClient,
  ) {}

  // get authToken(): string {
  //   const authToken = localStorage.getItem(L_STORAGE_AUTH_KEY);
  //   if (authToken) {
  //     return JSON.parse(authToken);
  //   }
  // }
  //
  // isAuth(): boolean {
  //   console.log(!!this.authToken, 'authToken');
  //   return !!this.authToken;
  // }

  get user(): User {
    if (localStorage.getItem(L_STORAGE_USER_KEY)) {
      return JSON.parse(localStorage.getItem(L_STORAGE_USER_KEY));
    }
  }

  login({login, password}: ILoginUserData): Observable<{token: string}> {
    return this.http.post<{token: string}>(AUTH_SERVICE_HOST + '/login', {login, password});
  }

  getUserInfo(token: string): Observable<object> {
    return this.http.post(AUTH_SERVICE_HOST + '/userinfo', {token});
  }

  logout(): void {
    localStorage.removeItem(L_STORAGE_AUTH_KEY);
    localStorage.removeItem(L_STORAGE_USER_KEY);
  }
}
