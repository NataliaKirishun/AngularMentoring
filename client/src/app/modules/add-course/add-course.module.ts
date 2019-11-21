import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCourseComponent } from './add-course.component';
import { CourseDurationComponent } from './components/course-duration/course-duration.component';
import { CourseDateComponent } from './components/course-date/course-date.component';
import { CourseAuthorsComponent } from './components/course-authors/course-authors.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AddCourseComponent,
    CourseDurationComponent,
    CourseDateComponent,
    CourseAuthorsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ]
})
export class AddCourseModule { }
