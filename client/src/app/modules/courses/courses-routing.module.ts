import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';

import { AddCourseComponent } from './pages/add-course/add-course.component';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { AuthGuard } from '../../shared/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    data: {
      breadcrumb: null,
    },
    children: [
      {
        path: '',
        component: CoursesListComponent,
        data: {
          breadcrumb: null,
        },
      },
      {
        path: 'new',
        canActivate: [AuthGuard],
        component: AddCourseComponent,
        pathMatch: 'full',
        data: {
          breadcrumb: 'New'
        },
      },
      {
        path: ':id',
        canActivate: [AuthGuard],
        component: AddCourseComponent,
        data: {
          breadcrumb: null,
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
