import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State, courseAdapter } from './course.state';
import { CourseApiActions } from './actions';

const reducer = createReducer(
  initialState,
  on( CourseApiActions.loadCoursesSuccess, (state, payload) => courseAdapter.addAll(payload.courses, state)),
  on( CourseApiActions.loadCoursesFailure, (state, error) => ({ ...state, errorMessage: error.message})),
  on( CourseApiActions.updateCourseSuccess, (state, payload) => courseAdapter.updateOne(payload.course, state)),
  on( CourseApiActions.updateCourseFailure, (state, error) => ({...state, errorMessage: error.message})),
  on( CourseApiActions.deleteCourseSuccess, (state, courseId) => courseAdapter.removeOne(courseId.id, state)),
  on( CourseApiActions.deleteCourseFailure, (state, error) => ({...state, errorMessage: error.message})),
  on( CourseApiActions.addCourseSuccess, (state, payload) => courseAdapter.addOne(payload.course, state)),
  on( CourseApiActions.addCourseFailure, (state, error) => ({...state, errorMessage: error.message})),
  on( CourseApiActions.searchCoursesSuccess, (state, payload) => courseAdapter.addAll(payload.courses, state)),
  on( CourseApiActions.searchCoursesFailure, (state, error) => ({...state, errorMessage: error.message})),
  on( CourseApiActions.loadMoreCoursesSuccess, (state, payload) => courseAdapter.addMany(payload.courses, state)),
  on( CourseApiActions.loadMoreCoursesFailure, (state, error) => ({...state, errorMessage: error.message})),
);

export function courseReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
