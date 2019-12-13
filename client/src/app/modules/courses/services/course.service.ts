import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseListItem, ICourseListItem } from '../models/course-list-item';
import { API_GATEWAY } from '../../../config/services.config';
import { HttpClient } from '@angular/common/http';
import { ICoursesQueryParams } from '../models/courses-query-params';
import { map } from 'rxjs/internal/operators';

const AUTH_SERVICE_HOST = `${API_GATEWAY}/courses`;

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  public pageAmount = '4';
  private coursesParams: ICoursesQueryParams = {
    start: '0',
    count: this.pageAmount,
    textFragment: null,
  };

  constructor(
    private http: HttpClient,
  ){}

  getList(): Observable<ICourseListItem[]> {
    return this.http.get<ICourseListItem[]>(AUTH_SERVICE_HOST, {
      params: {
        start: String(this.coursesParams.start),
        count: String(this.coursesParams.count),
        textFragment: this.coursesParams.textFragment,
      }
    })
      .pipe(
        map( courses => courses.map( course => new CourseListItem(course)))
      );
  }

  loadMoreCourses(): Observable<ICourseListItem[]> {
    this.coursesParams.start = String(Number(this.coursesParams.start) + Number(this.pageAmount));
    return this.getList();
  }

  searchCourses(searchStr: string): Observable<ICourseListItem[]> {
    this.coursesParams.textFragment = searchStr;
    this.coursesParams.start = '0';
    return this.getList();
  }

  createCourse(course: ICourseListItem): Observable<ICourseListItem> {
    return this.http.post(AUTH_SERVICE_HOST, course)
      .pipe(
        map( (course: ICourseListItem) => new CourseListItem(course))
      );
  }

  getItemById(id: number): Observable<ICourseListItem> {
    return this.http.get(AUTH_SERVICE_HOST + `/${id}`)
      .pipe(
        map( (course: ICourseListItem) => new CourseListItem(course))
      );
  }

  updateItem(course: ICourseListItem): Observable<ICourseListItem> {
    return this.http.patch(AUTH_SERVICE_HOST, course)
      .pipe (
        map( (course: ICourseListItem) => new CourseListItem(course))
      );
  }

  removeItem(id: number): Observable<{}> {
    return this.http.delete(AUTH_SERVICE_HOST + `/${id}`);
  }
}
