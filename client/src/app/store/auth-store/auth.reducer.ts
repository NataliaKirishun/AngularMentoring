import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './auth.state';
import { AuthApiActions, LoginPageActions } from '../auth-store/actions';

const reducer = createReducer(
  initialState,
  on( AuthApiActions.loginSuccess, state => ({ ...state, isAuthenticated: true, errorMessage: null })),
  on( AuthApiActions.loginFailure, (state, error) => ({ ...state, isAuthenticated: false, errorMessage: error.message })),
  on( AuthApiActions.getUserInfoSuccess, (state, user) => ({ ...state, name: user.name})),
  on( AuthApiActions.getUserInfoFailure, (state, error) => ({ ...state, isAuthenticated: false, name: null, errorMessage: error.message })),
  on( LoginPageActions.logout, state => ({ ...state, isAuthenticated: false, name: null })),
);

export function authReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
