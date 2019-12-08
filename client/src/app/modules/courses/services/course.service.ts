import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICourseListItem } from '../models/course-list-item';
import { SERVICES_CONFIG } from '../../../config/services.config';
import { HttpClient } from '@angular/common/http';
import { ICoursesQueryParams } from '../models/courses-query-params';
import {tap} from 'rxjs/internal/operators';

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
      }
    })
      .pipe(
        tap( (courses) => {
          if (courses.length) {
            this.courseList.push(...courses);
          }
        })
      );
  }

  loadMoreCourses(): Observable<ICourseListItem[]> {
    this.coursesParams.start = String(Number(this.coursesParams.start) + Number(this.pageAmount));
    return this.getList();
  }

  createCourse(course: ICourseListItem): Observable<ICourseListItem> {
    const newId = (new Date()).getTime();
    this.courseList.push({...course, id: newId});
    return of(this.courseList[this.courseList.length - 1]);
  }

  getItemById(id: number): Observable<ICourseListItem> {
    console.log('this.courseList', this.courseList);
    return of(this.courseList.find( item => item.id === id ));
  }

  updateItem(course: ICourseListItem): Observable<ICourseListItem> {
    const courseIndex = this.getCourseIndex(course.id);
    this.courseList.splice(courseIndex, 1, course);
    return of(course);
  }

  removeItem(id: number): Observable<any> {
    const courseIndex = this.getCourseIndex(id);
    this.courseList.splice(courseIndex, 1);
    return of('');
  }

  private getCourseIndex(id: number): number {
    return this.courseList.findIndex( item => item.id === id);
  }
}
