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
import { ModalTypes } from '../../../../config/modal.config';
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
  public modalType = ModalTypes.DeleteConfirmation;
  private courseIdToDelete: number = null;
  public courseTitleToDelete: string = null;
  public isToLoadMoreCourses = true;
  private subscription: Subscription[] = [];

  constructor(
    private courseService: CourseService,
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
        (courses: ICourseListItem[]) => this.filteredList = courses,
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
    this.subscription.push(this.courseService.removeItem(this.courseIdToDelete)
      .subscribe(
        () => {
          this.closeModal(this.modalType);
          const index = this.getCourseIndex(this.courseIdToDelete);
          this.filteredList.splice(index, 1);
      },
        error => console.log(error)
      )
    );
  }

  public searchCourse(searchValue: string): void {
    this.subscription.push(this.courseService.searchCourses(searchValue)
      .subscribe(
        (courses: ICourseListItem[]) => this.filteredList = courses,
        error => console.log(error)
      )
    );
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
        if (courses.length === Number(this.courseService.pageAmount)) {
          this.filteredList.push(...courses);
        } else {
          this.isToLoadMoreCourses = false;
        }
      },
      error => console.log(error))
    );
  }

  private getCourseIndex(id: number): number {
    return this.filteredList.findIndex( (course: ICourseListItem) => course.id === id);
  }
}




