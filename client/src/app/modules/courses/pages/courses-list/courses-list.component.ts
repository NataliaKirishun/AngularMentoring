import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../../../shared/modules/modal/service/modal.service';
import { OrderByPipe } from '../../../../shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from '../../../../shared/pipes/filter/filter.pipe';
import { ICourseListItem, IDeleteCourseEventData } from '../../models/course-list-item';
import { ModalTypes } from '../../../../config/modal.config';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../../../../store';
import { CoursePageActions } from '../../../../store/course-store/actions';
import { CourseStoreSelectors } from '../../../../store/course-store';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less'],
  providers: [ ModalService, OrderByPipe, FilterPipe ],
})
export class CoursesListComponent {
  public filteredList: Observable<ICourseListItem[]> = this.store.select(CourseStoreSelectors.selectAllCourses);
  public modalType = ModalTypes.DeleteConfirmation;
  private courseIdToDelete: number = null;
  public courseTitleToDelete: string = null;
  public isToLoadMoreCourses = true;

  constructor(
    private modalService: ModalService,
    private router: Router,
    private store: Store<RootStoreState.State>
  ) {}

  public deleteCourse(deleteCourseEventData: IDeleteCourseEventData): void {
    this.courseIdToDelete = deleteCourseEventData.id;
    this.courseTitleToDelete = deleteCourseEventData.name;
    this.openModal(this.modalType);
  }

  public removeCourse(): void {
    this.store.dispatch(CoursePageActions.deleteCourse({id: this.courseIdToDelete}));
    this.closeModal(this.modalType);
  }

  public searchCourse(searchValue: string): void {
    this.store.dispatch(CoursePageActions.searchCourses({value: searchValue}));
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
    this.store.dispatch(CoursePageActions.loadMoreCourses());
  }
}
