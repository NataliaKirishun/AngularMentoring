import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { course } from './';

@NgModule({
  declarations: [...course.declarations],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [...course.exports],
})
export class CourseModule { }
