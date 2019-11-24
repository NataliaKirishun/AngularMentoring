import { Component, EventEmitter, Output } from '@angular/core';
import { BasicInputComponent } from '../basic-input.component';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.less']
})
export class CourseAuthorsComponent extends BasicInputComponent<string> {}
