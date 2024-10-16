import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

const routes: Routes = [
  {
    path:'addCourse',
    component:AddCourseComponent
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'Admin/Courses',
    component:CoursesComponent
  },
  {
    path:'Admin/Students',
    component:StudentsComponent
  },
  {
    path:'Admin/Courses/Add',
    component:AddCourseComponent
  },
  {
    path:'Admin/Courses/Edit/:id',
    component:EditCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
