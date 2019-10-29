import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourseListItem } from '../../models/course-list-item';

import { faClock, faCalendarAlt, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.less']
})
export class CourseItemComponent {
  @Input() courseItem: ICourseListItem;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  public faClock = faClock;
  public faCalendarAlt = faCalendarAlt;
  public faPencilAlt = faPencilAlt;
  public faTrashAlt = faTrashAlt;

  public editCourse(): void {
    console.log('edit course');
  }

  public deleteCourse(): void {
    this.delete.emit(this.courseItem.id);
  }
}
