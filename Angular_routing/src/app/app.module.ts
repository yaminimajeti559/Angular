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
import { FormsModule } from '@angular/forms';
import { DownComponent } from './down/down.component';
import { UpComponent } from './up/up.component';
import { CourseGuardService } from './course-guard.service';
import { AuthService } from './auth.service';
import { ContactComponent } from './contact/contact.component';
import { CandeactivateService } from './candeactivate.service';


const routes: Routes=[
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path:'Home',component:HomeComponent},
  {path:'About',component:ABoutComponent},
  {path:'Contact',component:ContactComponent,canDeactivate:[CandeactivateService]},
  {path:'Courses',component:CoursesComponent,canActivate:[CourseGuardService]},
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
    CourseComponent,
    DownComponent,
    UpComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CourseGuardService,AuthService,CandeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
