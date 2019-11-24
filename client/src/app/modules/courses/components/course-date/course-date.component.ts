import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.less']
})
export class CourseDateComponent {
  @Output() changeDate: EventEmitter<string> = new EventEmitter<string>();

  public courseDate = '';

  handleDate(): void {
    this.changeDate.emit(this.courseDate);
  }
}
