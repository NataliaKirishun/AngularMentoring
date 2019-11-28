import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { ICourseListItem, IDeleteCourseEventData } from '../../models/course-list-item';
import { CourseItemComponent } from './course-item.component';
import { DurationPipe } from '../../../../shared/pipes/duration/duration.pipe';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let courseDe: DebugElement;
  let courseEl: HTMLElement;

  const expectedCourseItem = {
    id: '9adged88',
    title: 'Video Course 1',
    duration: 88,
    date: '9 Nov, 2018',
    description: 'about various components of a course description.',
    topRated: true,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [CourseItemComponent, DurationPipe],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.courseItem = expectedCourseItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Use Stand Alone testing for component with @Input @output

  it('should display course title', () => {
    courseDe  = fixture.debugElement.query(By.css('.course-item__title'));
    courseEl = courseDe.nativeElement;
    const upperCasePipe = new UpperCasePipe();
    fixture.detectChanges();
    expect(courseEl.textContent).toContain(upperCasePipe.transform(expectedCourseItem.title));
  });

  it('should display course duration', () => {
    courseDe  = fixture.debugElement.query(By.css('.course-item__duration'));
    courseEl = courseDe.nativeElement;
    fixture.detectChanges();
    const durationPipe = new DurationPipe();
    expect(courseEl.textContent).toContain(durationPipe.transform(expectedCourseItem.duration));
  });

  it('should display course date', () => {
    courseDe  = fixture.debugElement.query(By.css('.course-item__date'));
    courseEl = courseDe.nativeElement;
    fixture.detectChanges();
    expect(courseEl.textContent).toContain(expectedCourseItem.date);
  });

  it('should display course description', () => {
    courseDe  = fixture.debugElement.query(By.css('.course-item__description'));
    courseEl = courseDe.nativeElement;
    fixture.detectChanges();
    expect(courseEl.textContent).toContain(expectedCourseItem.description);
  });

  it('should raise delete event when clicked delete button (triggerEventHandler)', () => {
    let selectedCourseId: string;
    let selectedCourseTitle: string;
    courseDe  = fixture.debugElement.query(By.css('.course-item__delete-btn'));
    component.delete.subscribe((selectedCourseData: IDeleteCourseEventData) => {
      selectedCourseId = selectedCourseData.id;
      selectedCourseTitle = selectedCourseData.title;
    });
    courseDe.triggerEventHandler('click', null);
    expect(selectedCourseId).toBe(expectedCourseItem.id);
    expect(selectedCourseTitle).toBe(expectedCourseItem.title);
  });

  it('should call edit course handler when click on the edit button', () => {
    const componentSpy = spyOn(component, 'editCourse');
    courseDe  = fixture.debugElement.query(By.css('.course-item__edit-btn'));
    courseEl = courseDe.nativeElement;
    fixture.detectChanges();
    courseEl.click();
    expect(componentSpy).toHaveBeenCalled();
  });

  it('should console log message when calling editCourse', () => {
    const consoleSpy = spyOn(console, 'log');
    component.editCourse();
    expect(consoleSpy).toHaveBeenCalled();
  });
});

// Component class testing as a component with @Input and @Output

describe('CourseItemComponent testing with class approach ', () => {

  it('raises the delete event when clicked', () => {
    const component = new CourseItemComponent();
    const courseItem: ICourseListItem = {
      id: 'test_id',
      title: 'test_title',
      duration: 88,
      date: 'test_date',
      description: 'test_description',
      topRated: true,
    };
    component.courseItem = courseItem;
    component.delete.subscribe((selectedCourseData: IDeleteCourseEventData) => expect(selectedCourseData.id).toBe(courseItem.id));
    component.deleteCourse();
  });
});

// Testing CourseItemComponent as a component with @Input and @Output using host testing approach

@Component({
  template: `
    <app-course-item
      [courseItem]="course" (delete)="deleteCourse($event)">
    </app-course-item>`
})
class TestHostComponent {
  course: ICourseListItem = {
    id: '9adged88',
    title: 'Video Course 1',
    duration: 88,
    date: '9 Nov, 2018',
    description: 'about various components of a course description.',
    topRated: true,
  };
  selectedCourseId: string;
  selectedCourseTitle: string;

  deleteCourse(selectedCourseData: IDeleteCourseEventData) {
    this.selectedCourseId = selectedCourseData.id;
    this.selectedCourseTitle = selectedCourseData.title;
  }
}

describe('CourseItemComponent testing using host testing approach', () => {
  let testHost: TestHostComponent ;
  let fixture: ComponentFixture<TestHostComponent>;
  let courseTitle: HTMLElement;
  let courseDuration: HTMLElement;
  let courseDate: HTMLElement;
  let courseDescription: HTMLElement;
  let courseDeleteButton: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FontAwesomeModule ],
      declarations: [ CourseItemComponent, TestHostComponent, DurationPipe ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display course title', () => {
    courseTitle = fixture.nativeElement.querySelector('.course-item__title');
    const upperCasePipe = new UpperCasePipe();
    expect(courseTitle.textContent).toContain(upperCasePipe.transform(testHost.course.title));
  });

  it('should display course duration', () => {
    courseDuration = fixture.nativeElement.querySelector('.course-item__duration');
    const durationPipe = new DurationPipe();
    expect(courseDuration.textContent).toContain(durationPipe.transform(testHost.course.duration));
  });

  it('should display course duration', () => {
    courseDate = fixture.nativeElement.querySelector('.course-item__date');
    expect(courseDate.textContent).toContain(testHost.course.date);
  });

  it('should display course description', () => {
    courseDescription = fixture.nativeElement.querySelector('.course-item__description');
    expect(courseDescription .textContent).toContain(testHost.course.description);
  });

  it('should raise delete event when clicked delete button', () => {
    courseDeleteButton = fixture.nativeElement.querySelector('.course-item__delete-btn');
    courseDeleteButton.click();
    expect(testHost.selectedCourseId).toBe(testHost.course.id);
    expect(testHost.selectedCourseTitle).toBe(testHost.course.title);
  });
});
