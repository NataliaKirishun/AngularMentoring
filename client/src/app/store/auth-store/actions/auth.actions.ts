import { Action } from '@ngrx/store';
import { ILoginUserData, IToken, IUser } from '../../../core/models/user';


export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  GET_USER_INFO_SUCCESS = '[Auth] Get User Info Success',
  GET_USER_INFO_FAILURE = '[Auth] Get User Info Failure'
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: ILoginUserData) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: IToken) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: string) {}
}

export class GetUserInfoSuccess implements Action {
  readonly type = AuthActionTypes.GET_USER_INFO_SUCCESS;
  constructor(public payload: IUser) {}
}

export class GetUserInfoFailure implements Action {
  readonly type = AuthActionTypes.GET_USER_INFO_FAILURE;
  constructor(public payload: string) {}
}

export type All =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | GetUserInfoSuccess
  | GetUserInfoFailure;
