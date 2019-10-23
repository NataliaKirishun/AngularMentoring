import {Injectable} from '@angular/core';
import {CourseListItem} from './models/course-list-item';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() {
  }

  getCourseList(): CourseListItem[] {
    return [
      {
        id: '9adged87',
        title: 'Video Course 1. Name tag Video Course 1. Name tag Video Course 1. Name tag Video Course 1. Name tag Video Course 1. Name tag Video Course 1. Name tag',
        duration: '1h 28 min',
        date: '9 Nov, 2018',
        description: 'about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
      },
      {
        id: '9adged87',
        title: 'Video Course 1. Name tag',
        duration: '1h 28 min',
        date: '9 Nov, 2018',
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
      }
    ];
  }
}

