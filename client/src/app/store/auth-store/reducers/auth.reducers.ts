import { All, AuthActionTypes } from '../actions/auth.actions';
import { IName } from '../../../core/models/user';

export interface State {
  isAuthenticated: boolean;
  token: string | null;
  errorMessage: string | null;
  name: IName | null;
}

export const initialState: State = {
  isAuthenticated: false,
  token: null,
  errorMessage: null,
  name: null,
};

export const authReducer = (state = initialState, action: All) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        errorMessage: null,
      };
    }
    case AuthActionTypes.GET_USER_INFO_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
      };
    }
    default: {
      return state;
    }
  }
};
