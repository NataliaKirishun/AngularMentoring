import {IAuthors} from '../../modules/courses/models/course-list-item';

export interface State {
  authors: IAuthors[] | null;
  errorMessage: string | null;
}

export const initialState: State = {
  authors: null,
  errorMessage: null,
};
