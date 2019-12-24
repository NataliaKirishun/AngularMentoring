import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  LOGIN = '[Auth] Login',
  LOGOUT = '[Auth] Logout'
}

export const login = createAction(
  ActionTypes.LOGIN,
  props<{ login: string, password: string }>()
);

export const logout = createAction(
  ActionTypes.LOGOUT
);
