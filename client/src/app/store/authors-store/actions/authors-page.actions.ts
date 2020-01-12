import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  SEARCH_AUTHOR = '[Authors] Load authors',
}

export const searchAuthors = createAction(
  ActionTypes.SEARCH_AUTHOR,
  props<{ value: string }>()
);
