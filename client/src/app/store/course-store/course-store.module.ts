import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CourseStoreEffects } from './effects';
import { courseReducer } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('course', courseReducer),
    EffectsModule.forFeature([CourseStoreEffects]),
  ],
  providers: [CourseStoreEffects],
})
export class CourseStoreModule {}
