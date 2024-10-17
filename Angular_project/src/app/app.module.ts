import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddCourseComponent,
    CoursesComponent,
    HomeComponent,
    StudentsComponent,
    AddStudentComponent,
    EditCourseComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    BadgeModule,
    InputTextModule,
    AvatarModule,
    DropdownModule,
    CardModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
