import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CourseSearchComponent } from './course-search.component';

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;
  let searchBtnDe: DebugElement;
  let searchBtnEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CourseSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call search Handler when starting search', () => {
    const componentSpy = spyOn( component,'handleSearch' );
    searchBtnDe  = fixture.debugElement.query(By.css('.course-search__button'));
    searchBtnEl = searchBtnDe.nativeElement;
    searchBtnEl.click();
    expect(componentSpy).toHaveBeenCalled();
  });

  it('should console log message when calling search handler', () => {
    const consoleSpy = spyOn( console,'log');
    component.handleSearch();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
