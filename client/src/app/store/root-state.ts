import { AuthStoreState } from './auth-store';
import { CourseStoreState } from './course-store';

export interface State {
  auth: AuthStoreState.State;
  course: CourseStoreState.State;
}
