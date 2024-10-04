import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ABoutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';


const routes: Routes=[
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path:'Home',component:HomeComponent},
  {path:'About',component:ABoutComponent},
  {path:'Courses',component:CoursesComponent},
  {path:'Courses/Course/:id',component:CourseComponent},
  {path:'**',component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ABoutComponent,
    CoursesComponent,
    ErrorComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
