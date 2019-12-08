import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICourseListItem } from '../models/course-list-item';
import { SERVICES_CONFIG } from '../../../config/services.config';
import { HttpClient } from '@angular/common/http';
import { ICoursesQueryParams } from '../models/courses-query-params';
import { tap } from 'rxjs/internal/operators';

const AUTH_SERVICE_HOST = `${SERVICES_CONFIG.API_GATEWAY.PROTOCOL}://${SERVICES_CONFIG.API_GATEWAY.HOST}/courses`;

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  public courseList: ICourseListItem[] = [];
  private pageAmount = '4';
  private coursesParams: ICoursesQueryParams = {
    start: '0',
    count: this.pageAmount,
    sort: null,
    filter: null,
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
        tap( (courses) => {
          if (courses.length) {
            this.courseList.push(...courses);
            console.log(this.courseList);
            console.log(courses);
          }
        })
      );
  }

  loadMoreCourses(): Observable<ICourseListItem[]> {
    this.coursesParams.start = String(Number(this.coursesParams.start) + Number(this.pageAmount));
    return this.getList();
  }

  searchCourses(searchStr: string): Observable<ICourseListItem[]> {
    this.coursesParams.textFragment = searchStr;
    this.coursesParams.start = '0';
    this.courseList = [];
    return this.getList();
  }

  createCourse(course: ICourseListItem): Observable<{}> {
    return this.http.post(AUTH_SERVICE_HOST, course);
  }

  getItemById(id: number): ICourseListItem {
    return this.courseList.find( item => item.id === id );
  }

  updateItem(course: ICourseListItem): Observable<{}> {
    return this.http.patch(AUTH_SERVICE_HOST, course);
  }

  updateCurrentItem(course): void{
    const courseIndex = this.getCourseIndex(course.id);
    this.courseList.splice(courseIndex, 1, course);
  }

  removeItem(id: number): Observable<{}> {
    return this.http.delete(AUTH_SERVICE_HOST + `/${id}`);
  }

  removeCurrentItem(id: number): void {
    const courseIndex = this.getCourseIndex(id);
    this.courseList.splice(courseIndex, 1);
  }

  private getCourseIndex(id: number): number {
    return this.courseList.findIndex( item => item.id === id);
  }
}
