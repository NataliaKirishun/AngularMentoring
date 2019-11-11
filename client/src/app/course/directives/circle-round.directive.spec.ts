import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CircleRoundDirective } from './circle-round.directive';

@Component({
  template: `<div [appCircleRound]="freshCourseDate">Something with Green border</div>
  <div [appCircleRound]="upcomingCourseDate">Something with Blue border</div>
  <div [appCircleRound]="nowCourseDate">Something with Green border</div>
  <div>No Border</div>`
})
class TestComponent {
  public currentDate = Date.now().valueOf();
  public upcomingCourseDate = (new Date(this.currentDate + 1000 * 60 * 60 * 24)).toString();
  public freshCourseDate = (new Date(this.currentDate - 1000 * 60 * 60 * 24)).toString();
  public nowCourseDate = (new Date(this.currentDate)).toString();
}

describe('CircleRoundDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let highlightedDivs: DebugElement[];
  let bareDiv: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CircleRoundDirective,
        TestComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture.detectChanges();
    highlightedDivs = fixture.debugElement.queryAll(By.directive(CircleRoundDirective));
  });

  it('should have three highlighted elements', () => {
    expect(highlightedDivs.length).toBe(3);
  });

  it('should add to the first test div, which represents fresh course item, className "green"', () => {
    const freshCourseDiv = highlightedDivs[0];
    expect(freshCourseDiv.nativeElement.classList.contains('green')).toBe(true);
  });

  it('should add to the second test div, which represents upcoming course item, className "blue"', () => {
    const upcomingCourseDiv = highlightedDivs[1];
    expect(upcomingCourseDiv.nativeElement.classList.contains('blue')).toBe(true);
  });

  it('should add to the third test div, which represents today\'s course item, className "green"', () => {
    const todayCourseDiv = highlightedDivs[2];
    expect(todayCourseDiv.nativeElement.classList.contains('green')).toBe(true);
  });

  it('should not add to the forth test div, which represents old course item any colors classNames', () => {
    bareDiv = fixture.debugElement.query(By.css('div:last-child'));
    expect(bareDiv.nativeElement.classList.contains('green')).toBe(false);
    expect(bareDiv.nativeElement.classList.contains('blue')).toBe(false);
  });
});
