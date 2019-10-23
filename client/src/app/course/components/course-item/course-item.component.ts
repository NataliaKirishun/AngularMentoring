import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseListItem } from '../../models/course-list-item';

import { faClock, faCalendarAlt, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.less']
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem: CourseListItem;
  @Output() onDelete = new EventEmitter<string>();

  public faClock = faClock;
  public faCalendarAlt = faCalendarAlt;
  public faPencilAlt = faPencilAlt;
  public faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit() {
  }

  public deleteCourse(): void {
    this.onDelete.emit(this.courseItem.id);
  }

}
