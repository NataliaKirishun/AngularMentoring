import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { shared } from './index';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [...shared.declarations, BreadcrumbsComponent],
  imports: [
    CommonModule
  ],
  exports: [...shared.exports],
})
export class SharedModule { }
