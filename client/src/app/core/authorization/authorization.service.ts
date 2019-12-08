import { Injectable } from '@angular/core';
import {ILoginUserData, IUser, User} from '../models/user';
import {Observable, observable, of} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { SERVICES_CONFIG } from '../../config/services.config';
import {tap} from 'rxjs/internal/operators';


const L_STORAGE_AUTH_KEY = 'AUTH_TOKEN';
const L_STORAGE_USER_KEY = 'USER_DATA';

const MOCKED_USER = {
  id: 'dsdkwo8ewe',
  name: {
    first: 'John',
    last: 'Doe',
  },
  photo: 'https://im0-tub-ru.yandex.net/i?id=4293fa842466b4a7a939a126ce990ad0-l&n=13',
};

const AUTH_SERVICE_HOST = `${SERVICES_CONFIG.API_GATEWAY.PROTOCOL}://${SERVICES_CONFIG.API_GATEWAY.HOST}/auth`;

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

  login({login, password}: ILoginUserData): Observable<{token: string}> {
    return this.http.post<{token: string}>(AUTH_SERVICE_HOST + '/login', {login, password})
      .pipe(
        tap( ({token}) => {
          this.setTokenToLocalStorage(token, (user: User) => {this.user = user; });
        })
      );
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
    console.log('logout');
    if (this.isAuth()) {
      localStorage.removeItem(L_STORAGE_AUTH_KEY);
      localStorage.removeItem(L_STORAGE_USER_KEY);
    }
  }
}
