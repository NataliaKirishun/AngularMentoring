import { Injectable } from '@angular/core';
import { ILoginUserData, IUser, User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_GATEWAY, L_STORAGE_AUTH_KEY, L_STORAGE_USER_KEY } from '../../config/services.config';

const AUTH_SERVICE_HOST = `${API_GATEWAY}/auth`;

@Injectable()
export class AuthorizationService {

  constructor(
    private http: HttpClient,
  ) {}

  get authToken(): string {
    const authToken = localStorage.getItem(L_STORAGE_AUTH_KEY);
    if (authToken) {
      return JSON.parse(authToken);
    }
  }

  isAuth(): boolean {
    return !!this.authToken;
  }

  get user(): User {
    if (localStorage.getItem(L_STORAGE_USER_KEY)) {
      return JSON.parse(localStorage.getItem(L_STORAGE_USER_KEY));
    }
  }

  set user(user: User) {
    localStorage.setItem(L_STORAGE_USER_KEY, JSON.stringify(user));
  }

  login(login: string, password: string): Observable<{token: string}> {
    return this.http.post<{token: string}>(AUTH_SERVICE_HOST + '/login', {login, password});
  }

  setTokenToLocalStorage(token: string, callback): void {
    localStorage.setItem(L_STORAGE_AUTH_KEY, JSON.stringify(token));
    this.getUserInfo(token)
      .subscribe((res: IUser) => callback(res));
  }

  getUserInfo(token: string): Observable<object> {
    return this.http.post(AUTH_SERVICE_HOST + '/userinfo', {token});
  }

  logout(): void {
    if (this.isAuth()) {
      localStorage.removeItem(L_STORAGE_AUTH_KEY);
      localStorage.removeItem(L_STORAGE_USER_KEY);
    }
  }
}
