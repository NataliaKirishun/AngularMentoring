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
import { Subscription } from 'rxjs';

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
  public modalType = MODAL_TYPES.DELETE_CONFIRMATION;
  private courseIdToDelete: number = null;
  public courseTitleToDelete: string = null;
  private isToLoadMoreCourses = true;
  private subscription: Subscription[] = [];

  constructor(
    private courseService: CourseService,
    private filterPipe: FilterPipe,
    private modalService: ModalService,
    private router: Router,
  ) {}

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.subscription.push(this.courseService.getList()
      .subscribe(
        (courses: ICourseListItem[]) => {
          this.filteredList = courses;
      },
        error => console.log(error)));
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
    this.subscription.forEach( subscribtion => subscribtion.unsubscribe());
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
        this.courseService.removeCurrentItem(this.courseIdToDelete);
        this.closeModal(this.modalType);
      });
  }

  public searchCourse(searchValue: string): void {
    this.courseService.searchCourses(searchValue)
      .subscribe( () => {

      });
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
    this.subscription.push(this.courseService.loadMoreCourses()
      .subscribe( ( courses: ICourseListItem[]) => {
        console.log(courses);
        if (courses.length === Number(this.courseService.pageAmount)){
          this.filteredList.push(...courses);
        } else {
          this.isToLoadMoreCourses = false;
        }
      },
      error => console.log(error))
  );
  }
}




