import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { shared } from './index';

@NgModule({
  declarations: [...shared.declarations],
  imports: [
    CommonModule
  ],
  exports: [...shared.exports],
})
export class SharedModule { }
