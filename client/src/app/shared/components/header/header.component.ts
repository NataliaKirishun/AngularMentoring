import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../../core/authorization/authorization.service';
import { IName } from '../../../core/models/user';
import { HEADER_CONFIG } from 'src/app/config/header.config';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.states';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public logoPath: string;
  public logoText: string;
  public isAuth: Observable<boolean>;
  public name: Observable<IName>;

  constructor(
    private authService: AuthorizationService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.isAuth = this.store.select('authState', 'isAuthenticated');
    this.name = this.store.select('authState', 'name');
  }

  ngOnInit(): void {
    this.logoPath = HEADER_CONFIG.LOGO_PATH;
    this.logoText = HEADER_CONFIG.LOGO_TEXT;
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  logIn(): void {
    this.router.navigate(['login']);
  }
}
