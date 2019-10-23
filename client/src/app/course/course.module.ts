import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { course } from './';

@NgModule({
  declarations: [...course.declarations],
  imports: [
    CommonModule
  ],
  exports: [...course.exports],
})
export class CourseModule { }
