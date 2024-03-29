import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseListItem, ICourseListItem } from '../../models/course-list-item';
import { CourseService } from '../../services/course.service';
import { formatDate } from '../../../../helpers/date-helper';
import { ModeType } from './constans/mode-type-enum';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../../../../store';
import { CoursePageActions } from '../../../../store/course-store/actions';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit, OnDestroy {
  public courseData: ICourseListItem = {
    id: null,
    name: '',
    description: '',
    length: null,
    date: '',
    authors: {
      name: null,
      id: null,
    },
  };
  public mode: string;
  private subscription: Subscription[] = [];

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<RootStoreState.State>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe( (data) => {
      const id = +data.id;
      if (id) {
        this.subscription.push(this.courseService.getItemById(id)
          .subscribe(
            (course: ICourseListItem) =>  this.courseData = course,
            error => console.log(error)
          )
        );
        this.mode = ModeType.EDIT;
      } else {
        this.mode = ModeType.ADD;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription.length) {
      this.subscription.forEach( subscribtion => subscribtion.unsubscribe());
    }
  }

  handleDuration(length: number) {
    this.courseData.length = length;
  }

  handleDate(date: string) {
    this.courseData.date = date;
  }

  handleAuthors(author: string) {
    const authorId = (new Date()).getTime();
    this.courseData.authors = {
      id: authorId,
      name: author,
    };
  }

  onSubmit() {
    const courseItem: ICourseListItem = new CourseListItem(this.courseData);
    this.mode === ModeType.ADD ? this.createCourse(courseItem) : this.editCourse(courseItem);
  }

  closeAddForm() {
    this.router.navigate(['courses']);
  }

  get courseDate() {
    return formatDate(this.courseData.date);
  }

  createCourse(course: ICourseListItem): void {
    this.store.dispatch(CoursePageActions.createCourse({course}));
  }

  editCourse(course: ICourseListItem): void {
    this.store.dispatch(CoursePageActions.editCourse({course}));
  }
}
