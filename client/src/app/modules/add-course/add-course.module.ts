import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddCourseComponent } from './add-course.component';

@NgModule({
  declarations: [AddCourseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class AddCourseModule { }
