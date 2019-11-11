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

  getCourseList(): Observable<ICourseListItem[]> {
    return of(this.courseList);
  }
}
