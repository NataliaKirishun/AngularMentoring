import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { ModalService } from '../../../../shared/modules/modal/service/modal.service';
import { OrderByPipe } from '../../../../shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from '../../../../shared/pipes/filter/filter.pipe';
import { ICourseListItem, IDeleteCourseEventData } from '../../models/course-list-item';
import { ModalTypes } from '../../../../config/modal.config';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../../../../store';
import { CoursePageActions } from '../../../../store/course-store/actions';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less'],
  providers: [ ModalService, OrderByPipe, FilterPipe ],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public filteredList: Observable<ICourseListItem[]> = this.store.select( state => state.course.courses);
  public modalType = ModalTypes.DeleteConfirmation;
  private courseIdToDelete: number = null;
  public courseTitleToDelete: string = null;
  public isToLoadMoreCourses = true;
  private subscription: Subscription[] = [];

  constructor(
    private modalService: ModalService,
    private router: Router,
    private store: Store<RootStoreState.State>
  ) {}

  ngOnInit() {
    this.store.dispatch(CoursePageActions.loadCourses());
  }

  ngOnDestroy() {
    this.subscription.forEach( subscribtion => subscribtion.unsubscribe());
  }

  public deleteCourse(deleteCourseEventData: IDeleteCourseEventData): void {
    this.courseIdToDelete = deleteCourseEventData.id;
    this.courseTitleToDelete = deleteCourseEventData.name;
    this.openModal(this.modalType);
  }

  // public removeCourse(): void {
  //   this.subscription.push(this.courseService.removeItem(this.courseIdToDelete)
  //     .subscribe(
  //       () => {
  //         this.closeModal(this.modalType);
  //         const index = this.getCourseIndex(this.courseIdToDelete);
  //         this.filteredList.splice(index, 1);
  //     },
  //       error => console.log(error)
  //     )
  //   );
  // }

  // public searchCourse(searchValue: string): void {
  //   this.subscription.push(this.courseService.searchCourses(searchValue)
  //     .subscribe(
  //       (courses: ICourseListItem[]) => this.filteredList = courses,
  //       error => console.log(error)
  //     )
  //   );
  // }

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

  // public loadCourses(): void {
  //   this.subscription.push(this.courseService.loadMoreCourses()
  //     .subscribe( ( courses: ICourseListItem[]) => {
  //       if (courses.length === Number(this.courseService.pageAmount)) {
  //         this.filteredList.push(...courses);
  //       } else {
  //         this.isToLoadMoreCourses = false;
  //       }
  //     },
  //     error => console.log(error))
  //   );
  // }

  // private getCourseIndex(id: number): number {
  //   return this.filteredList.findIndex( (course: ICourseListItem) => course.id === id);
  // }
}
