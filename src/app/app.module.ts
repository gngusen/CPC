import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    StudentDashboardComponent
  ],
  imports: [ 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {path: 'login',component: LoginComponent},
    {path: 'register',component: RegisterComponent},
    {path: 'studentdashboard',component: StudentDashboardComponent},
    {path: 'admindashboard',component: AdminDashboardComponent},

 ]), 
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
