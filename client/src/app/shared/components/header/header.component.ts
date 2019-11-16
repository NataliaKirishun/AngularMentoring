import {Component, OnChanges, OnInit} from '@angular/core';

import { HEADER_CONFIG } from 'src/app/config/header.config';

import { AuthorizationService } from '../../../core/authorization/authorization.service';
import { Router } from '@angular/router';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public logoPath: string;
  public logoText: string;

  constructor(
    private authService: AuthorizationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.logoPath = HEADER_CONFIG.LOGO_PATH;
    this.logoText = HEADER_CONFIG.LOGO_TEXT;
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  logIn(): void {
    console.log('login');
    this.router.navigate(['login']);
  }

  get isAuth(): boolean {
    return this.authService.isAuth();
  }

  get user(): User {
    return this.authService.user;
  }
}
