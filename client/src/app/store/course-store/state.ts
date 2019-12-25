import { ICourseListItem } from '../../modules/courses/models/course-list-item';

export interface State {
  courses: ICourseListItem[];
}

export const initialState: State = {
  courses: [],
};
