import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { AuthorizationService } from '../../../core/authorization/authorization.service';

import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure, GetUserInfoSuccess, GetUserInfoFailure } from '../actions/auth.actions';
import { catchError, exhaustMap } from 'rxjs/internal/operators';
import {ILoginUserData, IName, IToken, IUser} from '../../../core/models/user';
import { of } from 'rxjs';
import { L_STORAGE_AUTH_KEY, L_STORAGE_USER_KEY } from '../../../config/services.config';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthorizationService,
    private router: Router,
  ) {}

  @Effect()
  login$ = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: LogIn) => action.payload),
    exhaustMap((auth: ILoginUserData) => this.authService
      .login(auth)
      .pipe(
        map( (token: IToken) => new LogInSuccess(token)),
        catchError(error => of(new LogInFailure(error)))
      ))
  );

  @Effect()
  loginSuccess$ = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    map( (action: LogInSuccess) => action.payload.token),
    // tap( (token: string) => localStorage.setItem(L_STORAGE_AUTH_KEY, token)),
    exhaustMap((token: string) => this.authService
      .getUserInfo(token)
      .pipe(
        map( (user: IUser) => new GetUserInfoSuccess(user)),
        catchError( error => of(new GetUserInfoFailure(error)))
      ))
  );

  @Effect({dispatch: false})
  getUserInfoSuccess$ = this.actions.pipe(
    ofType(AuthActionTypes.GET_USER_INFO_SUCCESS),
    map( (action: GetUserInfoSuccess) => action.payload ),
    tap( (user: IUser) => {
      localStorage.setItem( L_STORAGE_USER_KEY, JSON.stringify(user.name));
      localStorage.setItem(L_STORAGE_AUTH_KEY, user.token)
      this.router.navigate(['courses']);
    }),
  );

}
