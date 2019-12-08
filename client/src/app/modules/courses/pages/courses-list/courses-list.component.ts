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
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { ModalService } from '../../../../shared/modules/modal/service/modal.service';
import { OrderByPipe } from '../../../../shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from '../../../../shared/pipes/filter/filter.pipe';
import { ICourseListItem, IDeleteCourseEventData } from '../../models/course-list-item';

import { MODAL_TYPES } from '../../../../config/modal.config';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less'],
  providers: [ ModalService, OrderByPipe, FilterPipe ],
})
export class CoursesListComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  public filteredList: ICourseListItem[] = [];
  public sortField = 'date';
  public modalType = MODAL_TYPES.DELETE_CONFIRMATION;
  private courseIdToDelete: number = null;
  public courseTitleToDelete: string = null;

  constructor(
    private courseService: CourseService,
    private orderByPipe: OrderByPipe,
    private filterPipe: FilterPipe,
    private modalService: ModalService,
    private router: Router,
  ) {}

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.courseService.getList()
      .subscribe(() => {
        this.filteredList = this.courseService.courseList;
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
    return this.filteredList.length;
  }

  public deleteCourse(deleteCourseEventData: IDeleteCourseEventData): void {
    this.courseIdToDelete = deleteCourseEventData.id;
    this.courseTitleToDelete = deleteCourseEventData.name;
    this.openModal(this.modalType);
  }

  public removeCourse(): void {
    this.courseService.removeItem(this.courseIdToDelete)
      .subscribe( () => {
        this.filteredList = this.courseService.courseList;
        this.courseIdToDelete = null;
        this.closeModal(this.modalType);
      });
  }

  public searchCourse(searchValue: string): void {
    this.courseService.searchCourses(searchValue)
      .subscribe( () => {
        this.filteredList = this.courseService.courseList;
      })
    this.filteredList = this.filterPipe.transform(this.filteredList, searchValue, 'name');
  }

  public openModal(type: string) {
    this.modalService.open(type);
  }

  public closeModal(type: string) {
    this.modalService.close(type);
    this.courseIdToDelete = null;
  }

  public addNewCourse(): void {
    this.router.navigate(['/courses', 'new']);
  }

  public loadCourses(): void {
    this.courseService.loadMoreCourses()
      .subscribe( () =>
        this.filteredList = this.courseService.courseList);
  }
}




