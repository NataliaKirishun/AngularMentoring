import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IBreadcrumb } from '../../models/breadcrumb';
import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.states';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[] = [];
  public isAuth: Observable<boolean>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
    ) {
    this.isAuth = this.store.select('authState', 'isAuthenticated');
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }

  get isPageExist(): boolean {
    return !!this.breadcrumbs.length;
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }
      const label = this.getLabel(child.snapshot.data);
      if (label) {
        breadcrumbs.push({label, url});
      }
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

  private getLabel(data): string {
      if (data.course) {
        return data.course.name;
      }
      return data.breadcrumb;
  }
}
