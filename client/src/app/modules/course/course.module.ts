import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CourseService } from './services/course.service';

import { CourseSearchComponent } from './components/course-search/course-search.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseComponent } from './course.component';
import { CircleRoundDirective } from './directives/circle-round.directive';
import { ModalModule } from '../../shared/modules/modal/modal.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [ CourseService ],
  declarations: [
    CourseSearchComponent,
    CourseItemComponent,
    CourseComponent,
    CircleRoundDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
  ],
})
export class CourseModule { }
