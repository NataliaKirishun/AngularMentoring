import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import { ICourseListItem } from './models/course-list-item';
import { CourseService } from './services/course.service';
import { OrderByService } from '../shared/services/order-by/order-by.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less'],
})
export class CourseComponent implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  public courseList: ICourseListItem[] = [];
  public sortedList: ICourseListItem[] = [];
  public courseListLength = 0;
  public sortField = 'date';

  constructor(private courseService: CourseService, private orderByService: OrderByService) {}

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.courseService.getCourseList()
      .subscribe((courseList: ICourseListItem[]) => {
        this.courseList = courseList;
        this.courseListLength = courseList.length;
        this.sortedList = this.orderByService.setOrderByField(this.courseList, this.sortField);
      });
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  public deleteCourse(courseId: string): void {
    console.log('course to delete', courseId);
  }
}
