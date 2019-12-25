import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './state';
import { CoursePageActions, CourseApiActions } from './actions';

const reducer = createReducer(
  initialState,
  on( CourseApiActions.loadCoursesSuccess, (state, list) => ({ courses: [...state.courses, ...list.courses] })),
);

export function courseReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
