import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './author.state';
import { AuthorsApiActions } from './actions';

const reducer = createReducer(
  initialState,
  on( AuthorsApiActions.searchAuthorsSuccess, (state, payload) => ({ ...state, authors: payload.authors })),
  on( AuthorsApiActions.searchAuthorsFailure, (state, error) => ({ ...state, authors: null, errorMessage: error.message })),
);

export function authorsReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
