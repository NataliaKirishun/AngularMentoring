import { Injectable } from '@angular/core';
import { User } from '../models/user';

const L_STORAGE_AUTH_KEY = 'AUTH_TOKEN';
const L_STORAGE_USER_KEY = 'USER_DATA';

const MOCKED_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHVkZW50NUBnZ21haWwuY29tIiwiaWF0IjoxNTczODA3MTM1LCJleHAiOjE1NzM4NDMxMzV9';
const MOCKED_USER = {
  id: 'dsdkwo8ewe',
  name: {
    first: 'John',
    last: 'Doe',
  },
  photo: 'https://im0-tub-ru.yandex.net/i?id=4293fa842466b4a7a939a126ce990ad0-l&n=13',
};

@Injectable()
export class AuthorizationService {

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

  login(email: string, password: string): void {
    console.log('login');
    // TODO: send post request to the server with email and password in body and get token in the response
    this.setTokenToLocalStorage(MOCKED_TOKEN);
    this.getUserInfo();
  }

  setTokenToLocalStorage(token: string): void {
    localStorage.setItem(L_STORAGE_AUTH_KEY, JSON.stringify(token));
    // TODO: after saving the token send emit sending get request in order to get all required information about the user
  }

  getUserInfo(): void {
    // TODO: send get request in order to get user information from the server in the response
    this.user = new User(MOCKED_USER);
  }

  logout(): void {
    console.log('logout');
    if (this.isAuth()) {
      localStorage.removeItem(L_STORAGE_AUTH_KEY);
      localStorage.removeItem(L_STORAGE_USER_KEY);
    }
  }
}
