import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthStoreModule } from './auth-store';
import { CourseStoreModule } from './course-store/course-store.module';

@NgModule({
  imports: [
    CommonModule,
    AuthStoreModule,
    CourseStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  declarations: [],
})
export class AppStoreModule {}
