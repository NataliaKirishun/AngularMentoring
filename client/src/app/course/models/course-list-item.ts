export interface ICourseListItem {
  id: string;
  title: string;
  duration: number;
  date: string;
  description: string;
  topRated: boolean;
}

export interface  IDeleteCourseEventData {
  id: string;
  title: string;
}
