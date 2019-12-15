import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthorizationService } from '../../../core/authorization/authorization.service';
import { IUser, User } from '../../../core/models/user';
import { HEADER_CONFIG } from 'src/app/config/header.config';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public logoPath: string;
  public logoText: string;
  public user: User;
  private componentDestroyed = new Subject();

  constructor(
    private authService: AuthorizationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.logoPath = HEADER_CONFIG.LOGO_PATH;
    this.logoText = HEADER_CONFIG.LOGO_TEXT;

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.componentDestroyed)
        )
      .subscribe(() => {
        if (this.isAuth && !this.user) {
          const token = this.authService.authToken;
          this.authService
            .getUserInfo(token)
            .subscribe(
              (user: IUser) => this.user = new User(user),
              error => console.log(error),
            );
        }
    });
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

  logOut(): void {
    this.authService.logout();
    this.user = null;
    this.router.navigate(['login']);
  }

  logIn(): void {
    console.log('login');
    this.router.navigate(['login']);
  }

  get isAuth(): boolean {
    return this.authService.isAuth();
  }

}
