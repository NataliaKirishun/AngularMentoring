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
import { FilterService } from '../shared/services/filter/filter.service';

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
  public filteredList: ICourseListItem[] = [];
  public courseListLength = 0;
  public sortField = 'date';

  constructor(
    private courseService: CourseService,
    private orderByService: OrderByService,
    private filterService: FilterService,
  ) {}

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.courseService.getCourseList()
      .subscribe((courseList: ICourseListItem[]) => {
        this.courseListLength = courseList.length;
        this.courseList = this.orderByService.setOrderByField(courseList, this.sortField);
        this.filteredList = this.courseList;
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

  public searchCourse(searchValue: string): void {
    this.filteredList = this.filterService.filterData(this.courseList, searchValue, 'title');
  }
}
