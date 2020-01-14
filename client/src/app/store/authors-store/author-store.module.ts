import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthorStoreEffects } from './author.effects';
import { authorsReducer } from './author.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('author', authorsReducer),
    EffectsModule.forFeature([AuthorStoreEffects]),
  ],
  providers: [AuthorStoreEffects],
})
export class AuthorStoreModule {}
