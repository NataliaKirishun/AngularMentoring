import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  @Component({
    selector: 'app-header',
    template: '<p>Mock Header Component</p>'
  })
  class MockHeaderComponent {}

  @Component({
    selector: 'app-breadcrumbs',
    template: '<p>Mock Breadcrumbs Component</p>'
  })
  class MockBreadcrumbsComponent {}

  @Component({
    selector: 'app-footer',
    template: '<p>Mock Footer Component</p>'
  })
  class MockFooterComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockBreadcrumbsComponent,
        MockFooterComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
