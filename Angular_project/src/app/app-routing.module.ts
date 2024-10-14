import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path:'addCourse',
    component:AddCourseComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'Admin/Courses',
    component:CoursesComponent
  },
  {
    path:'Admin/Students',
    component:StudentComponent
  },
  {
    path:'Admin/Courses/Add',
    component:AddCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
