import { Component, Input, OnInit } from '@angular/core';
import { CourseListItem } from '../../models/course-list-item';

import { faClock, faCalendarAlt, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.less']
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem: CourseListItem;

  faClock = faClock;
  faCalendarAlt = faCalendarAlt;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit() {
  }

}
