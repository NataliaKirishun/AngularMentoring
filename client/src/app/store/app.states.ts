import * as auth from './auth-store/reducers/auth.reducers';


export interface AppState {
  authState: auth.State;
}
