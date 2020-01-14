import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { AuthorsPageActions, AuthorsApiActions } from './actions';

import { AuthorService } from '../../modules/courses/services/author.service';

@Injectable()
export class AuthorStoreEffects {

  searchAuthors$ = createEffect (
    () =>
      this.actions$.pipe(
        ofType( AuthorsPageActions.searchAuthors),
        switchMap ( action =>
          this.authService.searchAuthors(action.value)
            .pipe(
              map( (authors) => AuthorsApiActions.searchAuthorsSuccess({ authors })),
              catchError(error => of(AuthorsApiActions.searchAuthorsFailure({message: error.message}))),
            ))
      )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthorService,
  ) {}
}
