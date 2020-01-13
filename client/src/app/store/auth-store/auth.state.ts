import { IName } from '../../core/models/user';

export interface State {
  isAuthenticated: boolean;
  name: IName | null;
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  name: null,
  errorMessage: null,
};
