import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, Input } from '@angular/core';

import { CourseComponent } from './course.component';
import { CourseService } from './services/course.service';

import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ICourseListItem } from './models/course-list-item';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let courseService: CourseService;
  let CourseServiceStub: Partial<CourseService>;
  let courseComponent: DebugElement;

  @Component({selector: 'app-course-item', template: ''})
  class CourseItemStubComponent {
    @Input() courseItem: any;
  }

  @Component({selector: 'app-course-search', template: ''})
  class CourseSearchStubComponent {}

  const courseListTest: ICourseListItem[] = [
    {
      id: '9adged88',
      title: 'TEST',
      duration: 88,
      date: 'Tue Nov 05 2019 13:58:23 GMT',
      description: 'Text1',
      topRated: true,
    },
    {
      id: '9adged87',
      title: 'Video Course 1.',
      duration: 88,
      date: 'Sun Nov 12 2019 13:58:23 GMT',
      description: 'Text2',
      topRated: true,
    },
    {
      id: '9adged87',
      title: 'Video Course 3.',
      duration: 88,
      date: 'Jan 09 2018 13:58:23 GMT',
      description: 'Text3',
      topRated: false,
    }
  ];

  beforeEach(async(() => {
    CourseServiceStub = {
      getList: () => of([]),
      removeItem: () => of(''),
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
    const getListSpy = spyOn(courseService, 'getList').and.returnValue(of([]));
    component.ngOnInit();
    expect(getListSpy).toHaveBeenCalled();
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
    const removeItem = spyOn(courseService, 'removeItem');
    component.deleteCourse('test_id');
    fixture.detectChanges();
    expect(consoleSpy).toHaveBeenCalled();
    expect(removeItem).toHaveBeenCalled();
  });

  it('should call searchCourse method when search event emitted', () => {
    const searchValue = 'test';
    courseComponent  = fixture.debugElement.query(By.css('app-course-search'));
    const searchCourseSpy = spyOn(component, 'searchCourse');
    courseComponent.triggerEventHandler('search', searchValue);
    fixture.detectChanges();
    expect(searchCourseSpy).toHaveBeenCalledWith(searchValue);
  });

  it('should filter course list according to search value ', () => {
    const searchValue = 'test';
    component.courseList = courseListTest;
    component.searchCourse(searchValue);
    fixture.detectChanges();
    const result = courseListTest[0];
    expect(component.filteredList[0].title).toBe(courseListTest[0].title);
  });

});
