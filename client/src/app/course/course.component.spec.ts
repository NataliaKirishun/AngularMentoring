import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { CourseComponent } from './course.component';
import { CourseService } from './services/course.service';

import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

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
      getCourseList: () => of([])
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

  it('should inject and call courseService on ngOnIni', () => {
    const getCourseListSpy = spyOn(courseService, 'getCourseList').and.returnValue(of([]));
    component.ngOnInit();
    expect(getCourseListSpy).toHaveBeenCalled();
  });

  it('should log message on ngOnChanges', () => {
    const consoleSpy = spyOn(console, 'log');
    component.ngOnChanges();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log message on ngOnInit', () => {
    const consoleSpy = spyOn(console, 'log');
    component.ngOnInit();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log message ngDoCheck', () => {
    const consoleSpy = spyOn(console, 'log');
    component.ngDoCheck();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log message on ngAfterContentInit', () => {
    const consoleSpy = spyOn(console, 'log');
    component.ngAfterContentInit();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log message on ngAfterContentChecked', () => {
    const consoleSpy = spyOn(console, 'log');
    component.ngAfterContentChecked();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log message on ngAfterViewInit', () => {
    const consoleSpy = spyOn(console, 'log');
    component.ngAfterViewInit();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log message on ngAfterViewChecked', () => {
    const consoleSpy = spyOn(console, 'log');
    component.ngAfterViewChecked();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log message on ngOnDestroy', () => {
    const consoleSpy = spyOn(console, 'log');
    component.ngOnDestroy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log message on calling delete Method', () => {
    const consoleSpy = spyOn(console, 'log');
    component.deleteCourse('test_id');
    expect(consoleSpy).toHaveBeenCalled();
  });
});
