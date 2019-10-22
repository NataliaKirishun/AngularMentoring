import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

export const shared = {
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
  ],
};
