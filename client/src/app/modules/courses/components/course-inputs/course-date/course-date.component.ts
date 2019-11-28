import { Component, Input } from '@angular/core';
import { BasicInputComponent } from '../basic-input.component';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.less']
})
export class CourseDateComponent extends BasicInputComponent<string> {

}
