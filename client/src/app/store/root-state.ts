import { AuthStoreState } from './auth-store';
import { AuthorStoreState } from './authors-store';
import { CourseStoreState } from './course-store';

export interface State {
  auth: AuthStoreState.State;
  author: AuthorStoreState.State;
  course: CourseStoreState.State;
}
