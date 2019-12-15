import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { CourseService } from './services/course.service';
import { CircleRoundDirective } from './directives/circle-round.directive';

import { CourseSearchComponent } from './components/course-search/course-search.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './pages/courses-list/courses-list.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { CourseAuthorsComponent } from './components/course-inputs/course-authors/course-authors.component';
import { CourseDateComponent } from './components/course-inputs/course-date/course-date.component';
import { CourseDurationComponent } from './components/course-inputs/course-duration/course-duration.component';
import { CourseDetailResolverService } from './services/course-detail-resolver.service';

@NgModule({
  declarations: [
    CourseSearchComponent,
    CourseItemComponent,
    CoursesComponent,
    CircleRoundDirective,
    CoursesListComponent,
    AddCourseComponent,
    CourseAuthorsComponent,
    CourseDateComponent,
    CourseDurationComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    CoursesRoutingModule,
  ],
  providers: [
    CourseDetailResolverService,
  ]
})
export class CoursesModule { }
