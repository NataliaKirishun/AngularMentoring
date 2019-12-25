import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  LOAD_COURSES = '[Course] Load courses',
  // LOGOUT = '[Auth] Logout'
}

export const loadCourses = createAction(
  ActionTypes.LOAD_COURSES,
);
