import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthStoreModule } from './auth-store';

@NgModule({
  imports: [
    CommonModule,
    AuthStoreModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  declarations: [],
})
export class RootStoreModule {}
