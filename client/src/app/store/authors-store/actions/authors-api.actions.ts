import { createAction, props } from '@ngrx/store';
import { IAuthors } from '../../../modules/courses/models/course-list-item';

export enum ActionTypes {
  SEARCH_AUTHORS_SUCCESS = '[Authors] Search authors success',
  SEARCH_AUTHORS_FAILURE = '[Authors] Search authors failure',
}

export const searchAuthorsSuccess = createAction(
  ActionTypes.SEARCH_AUTHORS_SUCCESS,
  props<{authors: IAuthors[]}>()
);

export const searchAuthorsFailure = createAction(
  ActionTypes.SEARCH_AUTHORS_FAILURE,
  props<{ message: string}>()
);
