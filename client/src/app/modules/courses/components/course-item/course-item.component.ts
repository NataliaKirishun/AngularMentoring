import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCalendarAlt, faClock, faPencilAlt, faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ICourseListItem, IDeleteCourseEventData } from '../../models/course-list-item';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  public isTopRated: boolean;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.isTopRated = this.courseItem.isTopRated;
  }

  public editCourse(): void {
    this.router.navigate(['courses', this.courseItem.id]);
  }

  public deleteCourse(): void {
    this.delete.emit({
      id: this.courseItem.id,
      name: this.courseItem.name });
  }
}
