import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CourseModule } from './modules/course/course.module';
import { LoginModule } from './modules/login/login.module';
import { AddCourseModule } from './modules/add-course/add-course.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    SharedModule,
    CourseModule,
    LoginModule,
    AddCourseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
