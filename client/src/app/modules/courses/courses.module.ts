import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesRoutingModule } from './courses-routing.module';

import { CourseService } from './services/course.service';

import { CourseSearchComponent } from './components/course-search/course-search.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursesComponent } from './courses.component';
import { CircleRoundDirective } from './directives/circle-round.directive';
import { SharedModule } from '../../shared/shared.module';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';

@NgModule({
  providers: [ CourseService ],
  declarations: [
    CourseSearchComponent,
    CourseItemComponent,
    CoursesComponent,
    CircleRoundDirective,
    CoursesListComponent,
    AddCourseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    CoursesRoutingModule,
  ],
})
export class CoursesModule { }
