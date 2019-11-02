import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { CourseComponent } from './course.component';
import { CourseService } from './services/course.service';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let courseService: CourseService;
  let courseServiceStub: Partial<CourseService>;

  @Component({selector: 'app-course-item', template: ''})
  class CourseItemStubComponent {
    @Input() courseItem: any;
  }

  @Component({selector: 'app-course-search', template: ''})
  class CourseSearchStubComponent {}

  beforeEach(async(() => {
    const CourseServiceStub = {
      getCourseList: () => []
    };

    TestBed.configureTestingModule({
      declarations: [
        CourseComponent,
        CourseItemStubComponent,
        CourseSearchStubComponent,
        ],
      providers: [{provide: CourseService, useValue: CourseServiceStub}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    courseService = fixture.debugElement.injector.get(CourseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call courseService', () => {
    const getCourseListSpy = spyOn(courseService, 'getCourseList')
    component.ngOnInit();
    expect(getCourseListSpy).toHaveBeenCalled();
  });
});
