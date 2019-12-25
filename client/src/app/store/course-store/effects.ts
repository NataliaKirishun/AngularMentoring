import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { AuthorizationService } from '../../core/authorization/authorization.service';
import { CoursePageActions, CourseApiActions } from './actions';
import { Router } from '@angular/router';
import { CourseService } from '../../modules/courses/services/course.service';
import { ICourseListItem } from '../../modules/courses/models/course-list-item';
import {Update} from '@ngrx/entity';

@Injectable()
export class CourseStoreEffects {

  loadCourses$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoursePageActions.loadCourses),
        switchMap( () => this.courseService.getList()
          .pipe(
            map(courses => CourseApiActions.loadCoursesSuccess({courses: courses})),
            catchError(error => of(CourseApiActions.loadCoursesFailure(error.message)))
          )
        )
      )
  );

  editCourse$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoursePageActions.editCourse),
        switchMap( (action) => this.courseService.updateItem(action.course)
          .pipe(
            map( course => CourseApiActions.updateCourseSuccess({course: course})),
            catchError(error => of(CourseApiActions.updateCourseFailure({message: error.message})))
          )
        )
      )
  );

  updateCourseSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CourseApiActions.updateCourseSuccess),
        tap( () => {
          this.router.navigate(['courses']);
        })
      ),
    {dispatch: false}
  );

  deleteCourse$ = createEffect (
    () =>
      this.actions$.pipe(
        ofType(CoursePageActions.deleteCourse),
        switchMap( action =>
          this.courseService.removeItem(action.id)
            .pipe(
              map( () => CourseApiActions.deleteCourseSuccess({id: action.id})),
              catchError(error => of(CourseApiActions.deleteCourseFailure({message: error.message}))),
            )
        )
      )
  );

  createCourse = createEffect (
    () =>
      this.actions$.pipe(
        ofType(CoursePageActions.createCourse),
        switchMap ( action =>
        this.courseService.createCourse(action.course)
          .pipe(
            map( (course) => CourseApiActions.addCourseSuccess({ course })),
            catchError(error => of(CourseApiActions.addCourseFailure({message: error.message}))),
          ))
      )
  );

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private router: Router,
  ) {}
}
