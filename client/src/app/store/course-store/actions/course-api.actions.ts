import { createAction, props } from '@ngrx/store';
import { ICourseListItem } from '../../../modules/courses/models/course-list-item';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
  LOAD_COURSES_SUCCESS = '[Courses] Load courses success',
  LOAD_COURSES_FAILURE = '[Courses] Load courses failure',
  UPDATE_COURSE_SUCCESS = '[Course] Update course success',
  UPDATE_COURSE_FAILURE = '[Course] Update course failure',
  DELETE_COURSE_SUCCESS = '[Course] Delete course success',
  DELETE_COURSE_FAILURE = '[Course] Delete course failure',
  ADD_COURSE_SUCCESS = '[Course] Add course success',
  ADD_COURSE_FAILURE = '[Course] Add course failure',
  SEARCH_COURSES_SUCCESS = '[Course] Search courses success',
  SEARCH_COURSE_FAILURE = '[Course] Search courses failure',
  LOAD_MORE_COURSES_SUCCESS = '[Course] Load more courses success',
  LOAD_MORE_COURSES_FAILURE = '[Course] Load more courses failure',
}

export const loadCoursesSuccess = createAction(
  ActionTypes.LOAD_COURSES_SUCCESS,
  props<{courses: ICourseListItem[]}>()
);

export const loadCoursesFailure = createAction(
  ActionTypes.LOAD_COURSES_FAILURE,
  props<{ message: string }>()
);

export const updateCourseSuccess = createAction(
  ActionTypes.UPDATE_COURSE_SUCCESS,
  props<{course: Update<ICourseListItem>}>()
);

export const updateCourseFailure = createAction(
  ActionTypes.UPDATE_COURSE_FAILURE,
  props<{ message: string}>()
);

export const deleteCourseSuccess = createAction(
  ActionTypes.DELETE_COURSE_SUCCESS,
  props<{ id: number }>()
);

export const deleteCourseFailure = createAction(
  ActionTypes.DELETE_COURSE_FAILURE,
  props<{ message: string}>()
);

export const addCourseSuccess = createAction(
  ActionTypes.ADD_COURSE_SUCCESS,
  props<{course: ICourseListItem}>()
);

export const addCourseFailure = createAction(
  ActionTypes.ADD_COURSE_FAILURE,
  props<{ message: string}>()
);

export const searchCoursesSuccess = createAction(
  ActionTypes.SEARCH_COURSES_SUCCESS,
  props<{courses: ICourseListItem[]}>()
);

export const searchCoursesFailure = createAction(
  ActionTypes.SEARCH_COURSE_FAILURE,
  props<{ message: string}>()
);

export const loadMoreCoursesSuccess = createAction(
  ActionTypes.LOAD_MORE_COURSES_SUCCESS,
  props<{courses: ICourseListItem[]}>()
);

export const loadMoreCoursesFailure = createAction(
  ActionTypes.LOAD_MORE_COURSES_FAILURE,
  props<{ message: string}>()
);

