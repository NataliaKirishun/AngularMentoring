import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { AuthorizationService } from '../../core/authorization/authorization.service';
import { LoginPageActions, AuthApiActions } from './actions';
import { L_STORAGE_AUTH_KEY, L_STORAGE_USER_KEY } from '../../config/services.config';
import { User } from '../../core/models/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthStoreEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      switchMap(action =>
        this.authService.login(action.login, action.password).pipe(
          map((token) => AuthApiActions.loginSuccess(token)),
          catchError(error => of(AuthApiActions.loginFailure(error.message)))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.loginSuccess),
        switchMap(action =>
          this.authService.getUserInfo(action.token).pipe(
            map((user: User) => AuthApiActions.getUserInfoSuccess(user)),
            catchError(error => of(AuthApiActions.getUserInfoFailure(error.message)))
          )
        )
      ),
  );

  getUserInfoSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.getUserInfoSuccess),
        tap(user => {
          localStorage.setItem(L_STORAGE_USER_KEY, JSON.stringify(user.name));
          localStorage.setItem(L_STORAGE_AUTH_KEY, JSON.stringify(user.token));
          this.router.navigate(['courses']);
          }
        )
      ),
{dispatch: false}
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.logout),
      tap(() => {
          localStorage.removeItem(L_STORAGE_USER_KEY);
          localStorage.removeItem(L_STORAGE_AUTH_KEY);
          this.router.navigate(['login']);
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthorizationService,
    private router: Router,
  ) {}
}
