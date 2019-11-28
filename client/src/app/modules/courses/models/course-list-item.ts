export interface ICourseListItem {
  id?: string;
  title: string;
  duration: number;
  date: string;
  description: string;
  topRated?: boolean;
  authors?: string;
}

export interface  IDeleteCourseEventData {
  id: string;
  title: string;
}

export class CourseListItem implements ICourseListItem {
  readonly id?;
  public title;
  public duration;
  public date;
  public description;
  public topRated?;
  public authors?;

  constructor(courseItem: ICourseListItem) {
    this.title = courseItem.title;
    this.description = courseItem.description;
    this.duration = courseItem.duration;
    this.date = courseItem.date;
    this.title = courseItem.title;
    this.authors = courseItem.authors;
  }
}
