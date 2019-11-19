import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthorizationService } from './authorization/authorization.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthorizationService,
      ]
    };
  }
}
