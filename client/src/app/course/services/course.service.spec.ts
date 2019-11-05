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

  it('#getCourseList should return value from observable',
    (done: DoneFn) => {
      const courseList = courseService.courseList;
      courseService.getCourseList().subscribe(value => {
        expect(value).toBe(courseList);
        done();
      });
    });
});
