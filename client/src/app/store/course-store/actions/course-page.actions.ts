import { createAction, props } from '@ngrx/store';
import { ICourseListItem } from '../../../modules/courses/models/course-list-item';

export enum ActionTypes {
  LOAD_COURSES = '[Course] Load courses',
  EDIT_COURSE = '[Course] Edit course',
  DELETE_COURSE = '[Course] Delete course',
  CREATE_COURSE = '[Course] Create course',
}

export const loadCourses = createAction(
  ActionTypes.LOAD_COURSES,
);

export const editCourse = createAction(
  ActionTypes.EDIT_COURSE,
  props<{ course: ICourseListItem }>()
);

export const deleteCourse = createAction(
  ActionTypes.DELETE_COURSE,
  props<{ id: number }>()
);

export const createCourse = createAction(
  ActionTypes.CREATE_COURSE,
  props<{ course: ICourseListItem }>()
);
