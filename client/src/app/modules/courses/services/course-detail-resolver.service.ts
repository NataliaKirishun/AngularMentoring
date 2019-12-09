import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import { CourseService } from './course.service';
import {Observable} from 'rxjs';
import {ICourseListItem} from '../models/course-list-item';

@Injectable()
export class CourseDetailResolverService implements Resolve<ICourseListItem> {

  constructor(
    private courseService: CourseService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICourseListItem> {
    const id = Number(route.paramMap.get('id'));
    console.log({ id });
    return this.courseService.getItemById(id);
  }
}
