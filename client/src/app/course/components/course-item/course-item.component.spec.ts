import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  const expectedCourseItem = {
    id: '9adged88',
    title: 'Video Course 1',
    duration: '1h 28 min',
    date: '9 Nov, 2018',
    description: 'about various components of a course description.'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FontAwesomeModule ],
      declarations: [ CourseItemComponent ]
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
});
