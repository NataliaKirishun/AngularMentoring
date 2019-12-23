import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './modules/courses/courses.module';
import { LoginModule } from './modules/login/login.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreModule } from './store/root-store.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    SharedModule,
    CoursesModule,
    LoginModule,
    RootStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
