import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard], children: [
      { path: 'createStudent', component: CreateStudentComponent },
      { path: 'allStudents', component: AllStudentsComponent }
    ]
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
