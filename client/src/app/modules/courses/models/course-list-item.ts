import {IUser} from "../../../core/models/user";

export interface IAuthors {
  id?: number;
  name: string;
}

export class Author implements IAuthors {
  readonly id?;
  public name;

  constructor(author: Partial<IAuthors>) {
    Object.assign(this, author);
  }
}

export interface ICourseListItem {
  id?: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors?: IAuthors;
  isTopRated?: boolean;
}

export interface  IDeleteCourseEventData {
  id: number;
  name: string;
}

export class CourseListItem implements ICourseListItem {
  readonly id?;
  public name;
  public date;
  public length;
  public description;
  public authors?;
  public isTopRated;

  constructor(courseItem: Partial<ICourseListItem>) {
    Object.assign(this, courseItem);
  }
}
