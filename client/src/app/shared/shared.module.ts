import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from './modules/modal/modal.module';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    OrderByPipe,
    FilterPipe,
    DurationPipe,
  ],
  imports: [
    CommonModule,
    ModalModule,
    RouterModule,
  ],
  exports: [
    ModalModule,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    OrderByPipe,
    FilterPipe,
    DurationPipe,
  ],
})
export class SharedModule { }
