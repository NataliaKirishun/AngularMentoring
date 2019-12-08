import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../core/authorization/authorization.service';
import { CourseService } from '../../../modules/courses/services/course.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IBreadcrumb } from '../../models/breadcrumb';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[] = [];

  constructor(
    private authService: AuthorizationService,
    private courseService: CourseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }

  get isAuth(): boolean {
    return this.authService.isAuth();
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
      const label = this.getLabel(child);
      if (label) {
        breadcrumbs.push({label, url});
      }
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

  private getLabel(child: ActivatedRoute): string {
    let label;
    child.params.subscribe((data) => {
      const id = data.id;
      if (id) {
        this.courseService.getItemById(id)
          .subscribe((courseData) => {
            label = courseData.name;
          });
      } else {
        label = child.snapshot.data.breadcrumb;
      }
    });
    return label;
  }
}
