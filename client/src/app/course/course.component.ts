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

  constructor(private courseService: CourseService) {}

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.courseList = this.courseService.getCourseList();
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
