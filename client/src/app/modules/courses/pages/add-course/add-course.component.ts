import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseListItem, ICourseListItem } from '../../models/course-list-item';
import { CourseService } from '../../services/course.service';
import { ModeType } from './constans/mode-type-enum';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../../../../store';
import { CoursePageActions } from '../../../../store/course-store/actions';
import { AuthorsPageActions } from '../../../../store/authors-store/actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit, OnDestroy {
  public mode: string;
  private subscription: Subscription[] = [];
  public addForm: FormGroup;
  private courseId?: number;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<RootStoreState.State>,
    private fb: FormBuilder,
  ) {
    this.addForm = fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      length: ['', [Validators.required]],
      date: ['', [Validators.required]],
      authors: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe( (data) => {
      const id = +data.id;
      if (id) {
        this.subscription.push(this.courseService.getItemById(id)
          .subscribe(
            (course: ICourseListItem) =>  {
              this.courseId = course.id;
              this.addForm.patchValue(course);
            },
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
      this.subscription.forEach( subscription => subscription.unsubscribe());
    }
  }

  onSubmit() {
    const courseItem: ICourseListItem = new CourseListItem(this.addForm.value);
    this.mode === ModeType.ADD ? this.createCourse(courseItem) : this.editCourse({...courseItem, id: this.courseId});
  }

  closeAddForm() {
    this.router.navigate(['courses']);
  }

  createCourse(course: ICourseListItem): void {
    this.store.dispatch(CoursePageActions.createCourse({course}));
  }

  editCourse(course: ICourseListItem): void {
    this.store.dispatch(CoursePageActions.editCourse({course}));
  }

  searchAuthor(searchValue: string): void {
    this.store.dispatch(AuthorsPageActions.searchAuthors({value: searchValue}));
  }

  get name() {
    return this.addForm.get('name');
  }

  get description() {
    return this.addForm.get('description');
  }

  get length() {
    return this.addForm.get('length');
  }

  get date() {
    return this.addForm.get('date');
  }

  get authors() {
    return this.addForm.get('authors');
  }
}
