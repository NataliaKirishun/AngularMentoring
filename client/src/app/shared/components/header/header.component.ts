import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IName } from '../../../core/models/user';
import { HEADER_CONFIG } from 'src/app/config/header.config';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../store/root-state';
import { LoginPageActions } from 'src/app/store/auth-store/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public logoPath: string;
  public logoText: string;
  public name: Observable<IName> = this.store.select( state => state.auth.name);
  public isAuth: Observable<boolean>  = this.store.select( state => state.auth.isAuthenticated);

  constructor(
    private router: Router,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.logoPath = HEADER_CONFIG.LOGO_PATH;
    this.logoText = HEADER_CONFIG.LOGO_TEXT;
  }

  logOut(): void {
    this.store.dispatch(LoginPageActions.logout());
  }

  logIn(): void {
    this.router.navigate(['login']);
  }
}
