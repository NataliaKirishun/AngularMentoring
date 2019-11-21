import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.less']
})
export class CourseDurationComponent {
  @Input() courseDuration;
}
