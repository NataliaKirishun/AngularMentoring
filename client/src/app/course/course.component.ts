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
import { OrderByPipe } from '../shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from '../shared/pipes/filter/filter.pipe';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less'],
  providers: [OrderByPipe, FilterPipe],
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
  public sortField = 'date';

  constructor(
    private courseService: CourseService,
    private orderByPipe: OrderByPipe,
    private filterPipe: FilterPipe,
  ) {}

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.courseService.getCourseList()
      .subscribe((courseList: ICourseListItem[]) => {
        this.courseList = this.orderByPipe.transform(courseList, this.sortField);
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

  get courseListLength() {
    return this.courseList.length;
  }

  public deleteCourse(courseId: string): void {
    console.log('course to delete', courseId);
  }

  public searchCourse(searchValue: string): void {
    this.filteredList = this.filterPipe.transform(this.courseList, searchValue, 'title');
  }
}
