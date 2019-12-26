import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import { ICourseListItem } from '../../modules/courses/models/course-list-item';

export const courseAdapter = createEntityAdapter<ICourseListItem>();

export interface State extends EntityState<ICourseListItem> {
  errorMessage: string | null;
}

export const initialState: State = courseAdapter.getInitialState({
  errorMessage: null,
});
