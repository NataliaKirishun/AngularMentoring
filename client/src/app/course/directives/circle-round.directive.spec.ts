import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CircleRoundDirective } from './circle-round.directive';

@Component({
  template: `
  <div appCircleRound="red">Something with Red border</div>
  <div appCircleRound="null">No Border</div>
  <div>No Border</div>
  <input #test [appCircleRound]="test.value" value="yellow"/>`
})
class TestComponent { }

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
    bareDiv = fixture.debugElement.query(By.css('div:not([appCircleRound])'));
  });

  it('should have three highlighted elements', () => {
    expect(highlightedDivs.length).toBe(3);
  });

  it('should circle 1st div with 2px solid red color border', () => {
    const firstDiv = highlightedDivs[0];
    const borderColor = firstDiv.nativeElement.style.borderColor;
    const borderWidth = firstDiv.nativeElement.style.borderWidth;
    const borderStyle = firstDiv.nativeElement.style.borderStyle;
    expect(borderColor).toBe('red');
    expect(borderWidth).toBe('2px');
    expect(borderStyle).toBe('solid');
  });

  it('shouldn\'t circle 2st div with any border', () => {
    const secondDiv = highlightedDivs[1];
    const borderWidth = secondDiv.nativeElement.style.borderWidth;
    const borderColor = secondDiv.nativeElement.style.borderClor;
    const borderStyle = secondDiv.nativeElement.style.borderStyle;
    expect(borderWidth).toBe('');
    expect(borderColor).toBe(undefined);
    expect(borderStyle).toBe('');
  });

  it('should bind <input> color to border color', () => {
    const input = highlightedDivs[2].nativeElement as HTMLInputElement;
    input.value = 'green';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.style.borderColor).toBe('green');
    expect(input.style.borderWidth).toBe('2px');
    expect(input.style.borderStyle).toBe('solid');
  });

  it('should not have border element without CircleRoundDirective', () => {
    const borderWidth = bareDiv.nativeElement.style.borderWidth;
    const borderColor = bareDiv.nativeElement.style.borderClor;
    const borderStyle = bareDiv.nativeElement.style.borderStyle;
    expect(borderWidth).toBe('');
    expect(borderColor).toBe(undefined);
    expect(borderStyle).toBe('');
  });
});
