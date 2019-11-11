import {Component, EventEmitter, Input, Output, OnChanges, OnInit } from '@angular/core';
import { faClock, faCalendarAlt, faPencilAlt, faTrashAlt, faStar } from '@fortawesome/free-solid-svg-icons';

import { ICourseListItem } from '../../models/course-list-item';

import { COLORS } from '../../../config/colors.config';
import { getDateDifference } from '../../../helpers/date-helper';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.less'],
})
export class CourseItemComponent implements OnInit, OnChanges {
  @Input() courseItem: ICourseListItem;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  public faClock = faClock;
  public faCalendarAlt = faCalendarAlt;
  public faPencilAlt = faPencilAlt;
  public faTrashAlt = faTrashAlt;
  public faStar = faStar;

  public color: string = null;
  public topRated: boolean;

  constructor() {}

  ngOnChanges(): void {
    const date = new Date(this.courseItem.date);
    const dateNow = Date.now();
    const dateDiff = getDateDifference(dateNow, date );
    this.setBorderColor(dateDiff);
  }

  ngOnInit(): void {
    this.topRated = this.courseItem.topRated;
  }

  public editCourse(): void {
    console.log('edit course');
  }

  public deleteCourse(): void {
    this.delete.emit(this.courseItem.id);
  }

  private setBorderColor(dateDiff): void {
    if ( dateDiff <= 14 && dateDiff >= 0 ) {
      this.color = COLORS.GREEN;
    }
    if ( dateDiff < 0 ) {
      this.color = COLORS.BLUE;
    }
  }
}
