import { ModuleWithProviders, NgModule } from '@angular/core';

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
        // AuthService,
      ]
    };
  }
}
