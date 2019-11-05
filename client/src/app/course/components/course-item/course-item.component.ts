import {Component, EventEmitter, Input, Output, OnChanges, OnInit } from '@angular/core';
import { ICourseListItem } from '../../models/course-list-item';

import { faClock, faCalendarAlt, faPencilAlt, faTrashAlt, faStar } from '@fortawesome/free-solid-svg-icons';

import { COLORS } from '../../../config/colors.config';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.less']
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

  ngOnChanges(): void {
    const dateDiff = this.getDateDifferance();
    if ( dateDiff <= 14 && dateDiff >= 0 ) {
      this.color = COLORS.GREEN;
    }
    if ( dateDiff < 0 ) {
      this.color = COLORS.BLUE;
    }
  }

  ngOnInit(): void {
    this.topRated = this.courseItem.topRated;
  }

  private getDateDifferance(): number {
    const date = new Date(this.courseItem.date);
    const dateNow = Date.now();
    return Math.round((dateNow.valueOf() - date.valueOf()) / (1000 * 60 * 60 * 24));
  }

  public editCourse(): void {
    console.log('edit course');
  }

  public deleteCourse(): void {
    this.delete.emit(this.courseItem.id);
  }
}
