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
import { AuthInterceptor } from './interceptors/token.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderOverlayComponent } from './components/loader-overlay/loader-overlay.component';
import { LoaderOverlayService } from './services/loader-overlay.service';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    OrderByPipe,
    FilterPipe,
    DurationPipe,
    LoaderOverlayComponent,
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
    LoaderOverlayComponent,
    OrderByPipe,
    FilterPipe,
    DurationPipe,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    LoaderOverlayService,
  ]
})
export class SharedModule { }
