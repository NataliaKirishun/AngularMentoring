import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { faClock, faCalendarAlt, faPencilAlt, faTrashAlt, faStar } from '@fortawesome/free-solid-svg-icons';

import { ICourseListItem, IDeleteCourseEventData } from '../../models/course-list-item';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.less'],
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem: ICourseListItem;
  @Output() delete: EventEmitter<IDeleteCourseEventData> = new EventEmitter<IDeleteCourseEventData>();

  public faClock = faClock;
  public faCalendarAlt = faCalendarAlt;
  public faPencilAlt = faPencilAlt;
  public faTrashAlt = faTrashAlt;
  public faStar = faStar;

  public color: string = null;
  public topRated: boolean;

  constructor() {}

  ngOnInit(): void {
    this.topRated = this.courseItem.topRated;
  }

  public editCourse(): void {
    console.log('edit course');
  }

  public deleteCourse(): void {
    this.delete.emit({
      id: this.courseItem.id,
      title: this.courseItem.title });
  }
}
