import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ICourseListItem } from '../models/course-list-item';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courseList: ICourseListItem[] = [
    {
      id: 1,
      name: 'Video Course 1. Name tag Video Course 1. Name tag Video Course 1. Name tag Video Course 1. Name tag Video Course 1. Name tag Video Course 1. Name tag',
      date: 'Tue Nov 05 2019 13:58:23 GMT',
      length: 88,
      description: 'about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      authors: {
        id: 2,
        name: 'John Doe',
      },
      isTopRated: true,
    },
    {
      id: 3,
      name: 'Hello hello hello',
      date: 'Sun Nov 12 2019 13:58:23 GMT',
      length: 88,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      authors: {
        id: 4,
        name: 'John Doe',
      },
      isTopRated: true,
    },
    {
      id: 5,
      name: 'Video Course 1. Name tag',
      date: 'Jan 09 2018 13:58:23 GMT',
      length: 88,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      authors: {
        id: 6,
        name: 'John Doe',
      },
      isTopRated: false,
    }
  ];

  getList(): Observable<ICourseListItem[]> {
    return of(this.courseList);
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
