import { courseAdapter, State } from './course.state';
import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { ICourseListItem } from '../../modules/courses/models/course-list-item';

export const selectCourseState: MemoizedSelector<
  object,
  State
  > = createFeatureSelector<State>('course');

export const selectAllCourses: (
  state: object,
) => ICourseListItem[] = courseAdapter.getSelectors(selectCourseState).selectAll;
