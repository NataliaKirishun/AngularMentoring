import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';

describe('CourseService', () => {
  let courseService: CourseService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [CourseService],
  }));

  beforeEach(() => {
    courseService = TestBed.get(CourseService);
  });

  it('should be created', () => {
    expect(courseService).toBeTruthy();
  });

  it('#getList should return value from observable',
    (done: DoneFn) => {
      const courseList = courseService.courseList;
      courseService.getList().subscribe(value => {
        expect(value).toBe(courseList);
        done();
      });
    });
});

describe('CourseService testing using class approach', () => {
  let courseService: CourseService;
  const mockCourseList = [
  {
    id: '9adged88',
    title: 'Video Course 1.',
    duration: 88,
    date: 'Tue Nov 05 2019 13:58:23 GMT',
    description: 'Text1',
    topRated: true,
  },
  {
    id: '9adged87',
    title: 'Video Course 2.',
    duration: 88,
    date: 'Sun Nov 12 2019 13:58:23 GMT',
    description: 'Text2',
    topRated: true,
  },
  {
    id: '9adged86',
    title: 'Video Course 3.',
    duration: 88,
    date: 'Jan 09 2018 13:58:23 GMT',
    description: 'Text3',
    topRated: false,
  }
  ];

  beforeEach(() => {
    courseService = new CourseService();
    courseService.courseList = mockCourseList.slice();
  });

  it('should be created', () => {
    expect(courseService).toBeTruthy();
  });

  it('should return all list of courses',
    (done: DoneFn) => {
      courseService.getList().subscribe(value => {
        expect(value).toEqual(mockCourseList);
        done();
      });
    });

  it('should create new course in course list',
    (done: DoneFn) => {
      const newCourse = {
        id: null,
        title: 'Video Course 4.',
        duration: 88,
        date: 'Jan 09 2018 13:58:23 GMT',
        description: 'Text4',
        topRated: false,
      };
      courseService.createCourse(newCourse).subscribe( value => {
        expect(value.title).toBe(newCourse.title);
        expect(value.duration).toBe(newCourse.duration);
        expect(value.date).toBe(newCourse.date);
        expect(value.description).toBe(newCourse.description);
        expect(value.topRated).toBe(newCourse.topRated);
        expect(courseService.courseList.length).toBe(mockCourseList.length + 1);
        done();
      });
    });

  it('should return course list item by ID',
    (done: DoneFn) => {
      courseService.getItemById(mockCourseList[0].id).subscribe(value => {
        expect(value).toBe(mockCourseList[0]);
        done();
      });
    });

  it('should return updated course item list',
    (done: DoneFn) => {
      const mockUpdatedCourse = {
        id: '9adged86',
        title: 'Video Course 3. New.',
        duration: 88,
        date: 'Jan 09 2018 13:58:23 GMT',
        description: 'Text3. New.',
        topRated: false,
      };
      courseService.updateItem(mockUpdatedCourse).subscribe(value => {
        expect(value).toBe(mockUpdatedCourse);
        expect(courseService.courseList[2]).toBe(mockUpdatedCourse);
        expect(courseService.courseList[2].title).toBe(mockUpdatedCourse.title);
        expect(courseService.courseList[2].description).toBe(mockUpdatedCourse.description);
        done();
      });
    });

  it('should remove course item from course list by it\'s ID',
    (done: DoneFn) => {
      courseService.removeItem(mockCourseList[0].id).subscribe(() => {
        expect(courseService.courseList.length).toBe(mockCourseList.length - 1);
        done();
      });
    });

});
