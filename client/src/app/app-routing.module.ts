import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './modules/course/course.component';
import { LoginComponent } from './modules/login/login.component';
import { AddCourseComponent } from './modules/add-course/add-course.component';

const routes: Routes = [
  {path: 'course', component: CourseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add', component: AddCourseComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
