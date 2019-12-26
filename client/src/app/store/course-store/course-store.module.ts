import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CourseStoreEffects } from './course.effects';
import { courseReducer } from './course.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('course', courseReducer),
    EffectsModule.forFeature([CourseStoreEffects]),
  ],
  providers: [CourseStoreEffects],
})
export class CourseStoreModule {}
