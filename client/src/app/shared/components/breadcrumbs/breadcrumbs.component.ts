import { Component } from '@angular/core';
import { AuthorizationService } from '../../../core/authorization/authorization.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent {

  constructor(private authService: AuthorizationService) {}

  get isAuth(): boolean {
    return this.authService.isAuth();
  }
}
