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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownComponent } from './down/down.component';
import { UpComponent } from './up/up.component';
import { CourseGuardService } from './course-guard.service';
import { AuthService } from './auth.service';
import { ContactComponent } from './contact/contact.component';
import { CandeactivateService } from './candeactivate.service';
import { StudentsComponent } from './students/students.component';
import { percentagePipe } from './Percentage.pipe';
import { FilterPipe } from './filter.pipe';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


const routes: Routes=[
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path:'Home',component:HomeComponent},
  {path:'About',component:ABoutComponent},
  {path:'Contact',component:ContactComponent,canDeactivate:[CandeactivateService]},
  {path:'Courses',component:CoursesComponent,canActivate:[CourseGuardService]},
  {path:'Courses/Course/:id',component:CourseComponent},
  {path:'Students',component:StudentsComponent},
  {path:'Register',component:TemplateFormsComponent},
  {path:'RForms',component:ReactiveFormsComponent},
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
    ContactComponent,
    StudentsComponent,
    percentagePipe,
    FilterPipe,
    TemplateFormsComponent,
    HttpRequestComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes,{enableTracing:true})
  ],
  providers: [CourseGuardService,AuthService,CandeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
