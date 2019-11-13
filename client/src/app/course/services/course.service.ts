import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ICourseListItem } from '../models/course-list-item';

@Injectable()
export class CourseService {
  courseList: ICourseListItem[] = [
    {
      id: '9adged88',
      title: 'Video Course 1. Name tag Video Course 1. Name tag Video Course 1. Name tag Video Course 1. Name tag Video Course 1. Name tag Video Course 1. Name tag',
      duration: 88,
      date: 'Tue Nov 05 2019 13:58:23 GMT',
      description: 'about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      topRated: true,
    },
    {
      id: '9adged87',
      title: 'Hello hello hello',
      duration: 88,
      date: 'Sun Nov 12 2019 13:58:23 GMT',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      topRated: true,
    },
    {
      id: '9adged87',
      title: 'Video Course 1. Name tag',
      duration: 88,
      date: 'Jan 09 2018 13:58:23 GMT',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      topRated: false,
    }
  ];

  getList(): Observable<ICourseListItem[]> {
    return of(this.courseList);
  }

  createCourse(course: ICourseListItem): Observable<ICourseListItem> {
    const newId = (new Date()).getTime().toString();
    const newCourse = course;
    newCourse.id = newId;
    this.courseList.push(newCourse);
    return of(newCourse);
  }

  getItemById(id: string): Observable<ICourseListItem> {
    return of(this.courseList.find( item => item.id === id ));
  }

  updateItem(course: ICourseListItem): Observable<ICourseListItem> {
    const courseIndex = this.getCourseIndex(course.id);
    this.courseList.splice(courseIndex, 1, course);
    return of(course);
  }

  removeItem(id: string): Observable<any> {
    const courseIndex = this.getCourseIndex(id);
    this.courseList.splice(courseIndex, 1);
    return of('');
  }

  private getCourseIndex(id: string): number {
    return this.courseList.findIndex( item => item.id === id);
  }
}
