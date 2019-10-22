import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageLayoutComponent } from './course-page-layout.component';

describe('CoursePageLayoutComponent', () => {
  let component: CoursePageLayoutComponent;
  let fixture: ComponentFixture<CoursePageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
