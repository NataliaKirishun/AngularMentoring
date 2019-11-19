import { TestBed } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';

describe('AuthorizationService', () => {
  let authorizationService: AuthorizationService;

  const L_STORAGE_AUTH_KEY = 'AUTH_TOKEN';
  const L_STORAGE_USER_KEY = 'USER_DATA';

  const testLoginUserData = {
    userEmail: 'test@test.test',
    userPassword: 'test',
  };

  const testToken = 'test_token';
  const testUser = {
    id: 'dsdkwo8ewe',
    name: {
      first: 'John',
      last: 'Doe',
    },
    photo: 'https://im0-tub-ru.yandex.net/i?id=4293fa842466b4a7a939a126ce990ad0-l&n=13',
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [AuthorizationService],
  }));

  beforeEach(() => {
    authorizationService = TestBed.get(AuthorizationService);
  });

  it('should be created', () => {
    expect(authorizationService).toBeTruthy();
  });

  it('should login new user when login method is called', () => {
    const consoleSpy = spyOn( console, 'log');
    const setTokenToLocalStorageSpy = spyOn( authorizationService, 'setTokenToLocalStorage');
    const getUserInfoSpy = spyOn( authorizationService, 'setUserInfo');
    authorizationService.login( testLoginUserData );
    expect(consoleSpy).toHaveBeenCalled();
    expect(setTokenToLocalStorageSpy).toHaveBeenCalled();
    expect(getUserInfoSpy).toHaveBeenCalled();
  });

  it('should set token to the LocalStorage after calling setTokenToLocalStorage method', () => {
    authorizationService.setTokenToLocalStorage( testToken );
    expect(JSON.parse(localStorage.getItem(L_STORAGE_AUTH_KEY))).toBe(testToken);
  });

  it('should return auth token when calling getter authToken', () => {
    localStorage.removeItem(L_STORAGE_AUTH_KEY);
    expect(authorizationService.authToken).toBe(undefined);
    localStorage.setItem(L_STORAGE_AUTH_KEY, JSON.stringify(testToken));
    expect(authorizationService.authToken).toBe(testToken);
  });

  it('should call authToken getter when calling isAuth method', () => {
    const authTokenSpy = spyOnProperty(authorizationService, 'authToken').and.returnValue(testToken);
    authorizationService.isAuth();
    expect(authTokenSpy).toHaveBeenCalled();
  });

  it('should return true when the user is authorized', () => {
    const authTokenSpy = spyOnProperty(authorizationService, 'authToken').and.returnValue(testToken);
    expect(authorizationService.isAuth()).toBe(true);
  });

  it('should return false when the user is not authorized', () => {
    const authTokenSpy = spyOnProperty(authorizationService, 'authToken').and.returnValue(undefined);
    expect(authorizationService.isAuth()).toBe(false);
  });

  it('should return user object when calling Authorization Service getter user while the user is authorized', () => {
    localStorage.setItem(L_STORAGE_USER_KEY, JSON.stringify(testUser));
    expect(authorizationService.user).toEqual(testUser);
  });

  it('should not return user object when calling Authorization Service getter user while the user is not authorized ', () => {
    localStorage.removeItem(L_STORAGE_USER_KEY);
    expect(authorizationService.user).toBe(undefined);
  });

  it('should write user data to local storage when calling Authorization Service setter method', () => {
    authorizationService.user = testUser;
    expect(JSON.parse(localStorage.getItem(L_STORAGE_USER_KEY))).toEqual(testUser);
  });

  it('should call user setter when calling  setUserInfo method of Authorization Service', () => {
    authorizationService.setUserInfo();
    expect(authorizationService.user).toEqual(testUser);
  });

  it('should call console log method when calling logout method', () => {
    const consoleSpy = spyOn( console, 'log');
    authorizationService.logout();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should logout when appropriate method is called', () => {
    const isAuthSpy = spyOn( authorizationService, 'isAuth').and.returnValue(true);
    authorizationService.logout();
    expect(localStorage.getItem(L_STORAGE_AUTH_KEY)).toBe(null);
    expect(localStorage.getItem(L_STORAGE_USER_KEY)).toBe(null);
  });

  it('should not call logout when appropriate method is called', () => {
    const isAuthSpy = spyOn( authorizationService, 'isAuth').and.returnValue(false);
    const removeItemSpy = spyOn( localStorage, 'removeItem');
    authorizationService.logout();
    expect(removeItemSpy).not.toHaveBeenCalledWith(L_STORAGE_AUTH_KEY);
    expect(removeItemSpy).not.toHaveBeenCalledWith(L_STORAGE_USER_KEY);
  });
});
