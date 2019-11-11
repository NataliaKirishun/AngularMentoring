import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CourseService } from './services/course.service';

import { CourseSearchComponent } from './components/course-search/course-search.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseComponent } from './course.component';
import { CircleRoundDirective } from './directives/circle-round.directive';
import { DurationPipe } from './pipes/duration.pipe';

@NgModule({
  providers: [ CourseService ],
  declarations: [
    CourseSearchComponent,
    CourseItemComponent,
    CourseComponent,
    CircleRoundDirective,
    DurationPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
})
export class CourseModule { }
