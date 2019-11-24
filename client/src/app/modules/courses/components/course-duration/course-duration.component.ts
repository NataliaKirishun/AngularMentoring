import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.less'],
})
export class CourseDurationComponent {
  @Output() changeDuration: EventEmitter<number> = new EventEmitter<number>();

  public courseDuration = null;

  public handleDuration(): void {
    this.changeDuration.emit(this.courseDuration);
  }
}
