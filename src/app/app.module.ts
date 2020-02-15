import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
 import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule, HttpClient} from '@angular/common/http'; 
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { LognInComponent } from './components/Login/logn-in/logn-in.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { LoginService } from './services/login.service';
import { AuthenticationGuardService } from './services/Auth/authentication-guard.service';
import { HomeComponent } from './components/home/home/home.component';
import { HomeCompanyComponent } from './components/home-page-company/home-company/home-company.component';
import { JObDetailsComponent } from './components/job-details/job-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostJobComponent } from './components/postjob/post-job/post-job.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './components/slider/slider.component';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { StudentsProfileSubmittedComponent } from './components/students-profile-submitted/students-profile-submitted.component';
import { ManageStudentsComponent } from './components/AdminDash-board/manage-students/manage-students.component';
import { AllCompanyComponent } from './components/AdminDash-board/all-company/all-company.component';
import { AllJobsComponent } from './components/AdminDash-board/all-jobs/all-jobs.component';
import { AllEventComponent } from './components/AdminDash-board/all-event/all-event.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    LognInComponent,
    NavBarComponent,
    StudentProfileComponent,
    HomeComponent,
    HomeCompanyComponent,
    JObDetailsComponent,
    FooterComponent,
    HomeCompanyComponent,
    PostJobComponent,
    SliderComponent,
    ListJobsComponent,
    StudentsProfileSubmittedComponent,
    ManageStudentsComponent,
    AllCompanyComponent,
    AllJobsComponent,
    AllEventComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [
    AuthenticationGuardService,
    LoginService,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
