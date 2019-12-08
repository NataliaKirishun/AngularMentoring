export interface IAuthors {
  id: number;
  name: string;
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

  constructor(courseItem: ICourseListItem) {
    this.id = courseItem.id;
    this.name = courseItem.name;
    this.date = courseItem.date;
    this.length = courseItem.length;
    this.description = courseItem.description;
    this.authors = courseItem.authors;
    this.isTopRated = courseItem.isTopRated;
  }
}
