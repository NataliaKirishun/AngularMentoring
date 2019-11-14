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
import { ICourseListItem, IDeleteCourseEventData } from './models/course-list-item';
import { CourseService } from './services/course.service';
import { OrderByPipe } from '../shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from '../shared/pipes/filter/filter.pipe';

import { ModalService } from '../modal/service/modal.service';

import { MODAL_TYPES } from '../config/modal.config';

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
  public modalType = MODAL_TYPES.DELETE_CONFIRMATION;
  private courseIdToDelete: string = null;
  private courseTitleToDelete: string = null;

  constructor(
    private courseService: CourseService,
    private orderByPipe: OrderByPipe,
    private filterPipe: FilterPipe,
    private modalService: ModalService,
  ) {}

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.courseService.getList()
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

  public deleteCourse(deleteCourseEventData: IDeleteCourseEventData): void {
    this.courseIdToDelete = deleteCourseEventData.id;
    this.courseTitleToDelete = deleteCourseEventData.title;
    console.log('course to delete', this.courseIdToDelete);
    this.openModal(this.modalType);
  }

  public removeCourse(): void {
    this.courseService.removeItem(this.courseIdToDelete);
    this.courseIdToDelete = null;
    this.closeModal(this.modalType);
  }

  public searchCourse(searchValue: string): void {
    this.filteredList = this.filterPipe.transform(this.courseList, searchValue, 'title');
  }

  public openModal(type: string) {
    this.modalService.open(type);
  }

  public closeModal(type: string) {
    this.modalService.close(type);
    this.courseIdToDelete = null;
  }
}
