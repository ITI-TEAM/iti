import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { StudentsProfileSubmittedComponent } from './components/students-profile-submitted/students-profile-submitted.component';
import { ManageStudentsComponent } from './components/AdminDash-board/manage-students/manage-students.component';
import { AllCompanyComponent } from './components/AdminDash-board/all-company/all-company.component';
import { AllJobsComponent } from './components/AdminDash-board/all-jobs/all-jobs.component';
import { AllEventComponent } from './components/AdminDash-board/all-event/all-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    ListJobsComponent,
    StudentsProfileSubmittedComponent,
    ManageStudentsComponent,
    AllCompanyComponent,
    AllJobsComponent,
    AllEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
