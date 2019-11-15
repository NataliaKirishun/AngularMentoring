import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './modules/course/course.component';

const routes: Routes = [
  {path: 'course', component: CourseComponent},
  {path: '', redirectTo: 'course', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
