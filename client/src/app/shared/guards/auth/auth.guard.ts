import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthorizationService } from '../../../core/authorization/authorization.service';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.states';

@Injectable()
export class AuthGuard implements CanActivate {
  public isAuth: Observable<boolean>;

  constructor(
    private authService: AuthorizationService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.isAuth = this.store.select('authState', 'isAuthenticated');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isAuth) {
        return true;
      }
      return true;
      // this.router.navigate(['/login']);
      // return false;
  }
}
