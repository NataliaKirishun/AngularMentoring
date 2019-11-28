import { Component } from '@angular/core';
import { BasicInputComponent } from '../basic-input.component';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.less'],
})
export class CourseDurationComponent extends BasicInputComponent<number> {}
