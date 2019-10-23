import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { course } from './';

@NgModule({
  declarations: [...course.declarations],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
})
export class CourseModule { }
