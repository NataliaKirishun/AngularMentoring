import { createAction, props } from '@ngrx/store';
import {ICourseListItem} from '../../../modules/courses/models/course-list-item';

export enum ActionTypes {
  LOAD_COURSES_SUCCESS = '[Courses] Load courses success',
  LOAD_COURSES_FAILURE = '[Courses] Load courses failure',
}

export const loadCoursesSuccess = createAction(
  ActionTypes.LOAD_COURSES_SUCCESS,
  props<{courses: ICourseListItem[]}>()

);

export const loadCoursesFailure = createAction(
  ActionTypes.LOAD_COURSES_FAILURE
);

