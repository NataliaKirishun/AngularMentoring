import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap, switchMap, tap } from 'rxjs/operators';
import { AuthorizationService } from '../../core/authorization/authorization.service';
import { CoursePageActions, CourseApiActions } from './actions';
import { Router } from '@angular/router';
import { CourseService } from '../../modules/courses/services/course.service';
import { ICourseListItem } from '../../modules/courses/models/course-list-item';

@Injectable()
export class CourseStoreEffects {

  loadCourses$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoursePageActions.loadCourses),
        switchMap( () => this.courseService.getList()
          .pipe(
            map(courses => CourseApiActions.loadCoursesSuccess({courses: courses}))
          )
        )
      )
  )

  // loginSuccess$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AuthApiActions.loginSuccess),
  //       switchMap(action =>
  //         this.authService.getUserInfo(action.token).pipe(
  //           map((user: User) => AuthApiActions.getUserInfoSuccess(user)),
  //           catchError(error => of(AuthApiActions.getUserInfoFailure(error.message)))
  //         )
  //       )
  //     ),
  // );

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private router: Router,
  ) {}
}
