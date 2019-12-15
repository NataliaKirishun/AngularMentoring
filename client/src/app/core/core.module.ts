import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationService } from './authorization/authorization.service';

@NgModule({
  imports: [HttpClientModule],
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
