import { createAction, props } from '@ngrx/store';
import { IUser } from '../../../core/models/user';

export enum ActionTypes {
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',
  GET_USER_INFO_SUCCESS = '[Auth] Get user info success',
  GET_USER_INFO_FAILURE = '[Auth] Get user info failure',
}

export const loginSuccess = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ token: string }>()
);

export const loginFailure = createAction (
  ActionTypes.LOGIN_FAILURE,
  props<{ message: string }>()
);

export const getUserInfoSuccess = createAction(
  ActionTypes.GET_USER_INFO_SUCCESS,
  props<IUser>()
)

export const getUserInfoFailure = createAction(
  ActionTypes.GET_USER_INFO_FAILURE,
  props<{ message: string }>()
)
