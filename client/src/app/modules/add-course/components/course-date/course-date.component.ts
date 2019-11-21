import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.less']
})
export class CourseDateComponent {
  @Input() courseDate;
}
