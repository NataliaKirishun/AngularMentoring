import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { CoursePageActions, CourseApiActions } from './actions';
import { AuthApiActions } from '../../store/auth-store/actions';
import { Router } from '@angular/router';
import { CourseService } from '../../modules/courses/services/course.service';
import { ICourseListItem } from '../../modules/courses/models/course-list-item';
import { Update } from '@ngrx/entity';
import { AuthorService } from '../../modules/courses/services/author.service';

@Injectable()
export class CourseStoreEffects {

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.loginSuccess),
        switchMap(() =>
          this.courseService.getList().pipe(
            map(courses => CourseApiActions.loadCoursesSuccess({courses})),
            catchError(error => of(CourseApiActions.loadCoursesFailure(error.message)))
          )
        )
      ),
  );

  editCourse$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoursePageActions.editCourse),
        switchMap( (action) => this.courseService.updateItem(action.course)
          .pipe(
            map( course => {
              const courseUpdate: Update<ICourseListItem> = {
                id: course.id,
                changes: course,
              };
              return CourseApiActions.updateCourseSuccess({course: courseUpdate});
            }),
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

  createCourseSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CourseApiActions.addCourseSuccess),
        tap( () => {
          this.router.navigate(['courses']);
        })
      ),
    {dispatch: false}
  );

  searchCourses$ = createEffect (
    () =>
      this.actions$.pipe(
        ofType(CoursePageActions.searchCourses),
        switchMap ( action =>
          this.courseService.searchCourses(action.value)
            .pipe(
              map( (courses) => CourseApiActions.searchCoursesSuccess({ courses })),
              catchError(error => of(CourseApiActions.searchCoursesFailure({message: error.message}))),
            ))
      )
  );

  loadMoreCourses$ = createEffect (
    () =>
      this.actions$.pipe(
        ofType(CoursePageActions.loadMoreCourses),
        switchMap ( action =>
          this.courseService.loadMoreCourses()
            .pipe(
              map( (courses) => CourseApiActions.loadMoreCoursesSuccess({ courses })),
              catchError(error => of(CourseApiActions.loadMoreCoursesFailure({message: error.message}))),
            ))
      )
  );

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private router: Router,
  ) {}
}
