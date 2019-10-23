import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';

export const shared = {
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
  ],
};
