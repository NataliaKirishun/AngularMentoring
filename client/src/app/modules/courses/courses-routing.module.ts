import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';

import { AddCourseComponent } from './pages/add-course/add-course.component';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: '',
        component: CoursesListComponent,
      },
      {
        path: 'new',
        component: AddCourseComponent,
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: AddCourseComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
