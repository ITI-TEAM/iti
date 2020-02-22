import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LognInComponent } from './components/Login/logn-in/logn-in.component';
import { AuthenticationGuardService } from './services/Auth/authentication-guard.service';
import { JObDetailsComponent } from './components/job-details/job-details.component';
import { HomeComponent } from './components/home/home/home.component';
import { HomeCompanyComponent } from './components/home-page-company/home-company/home-company.component';
import { PostJobComponent } from './components/postjob/post-job/post-job.component';
import { StudentsProfileSubmittedComponent } from './components/students-profile-submitted/students-profile-submitted.component';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { ViewSProfileComponent } from './components/view-sprofile/view-sprofile.component';
import { ManageStudentsComponent } from './components/AdminDash-board/manage-students/manage-students.component';
import { AllJobsComponent } from './components/AdminDash-board/all-jobs/all-jobs.component';
import { AllCompanyComponent } from './components/AdminDash-board/all-company/all-company.component';
import { AllEventComponent } from './components/AdminDash-board/all-event/all-event.component';
import { AddUser } from './components/Classes/add-user';
import { AddEvent } from './components/Classes/add-event';
import { AddEventComponent } from './components/add-event/add-event.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile/company-profile.component';
import { EditCompanyProfileComponent } from './components/edit-company-profile/edit-company-profile/edit-company-profile.component';
import { AddUsersComponent } from './components/add-users/add-users.component';


const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'login',component:LognInComponent},


  {path:'student-home/:ID',component:HomeComponent,canActivate:[AuthenticationGuardService]},
 {path:'student-profile/:ID',component:ViewSProfileComponent,canActivate:[AuthenticationGuardService]},
  {path:'edit-student-profile/:ID',component:StudentProfileComponent,canActivate:[AuthenticationGuardService]},
  {path:'job-details/:ID',component:JObDetailsComponent,canActivate:[AuthenticationGuardService]},
  {path:'list-jobs/:ID',component:ListJobsComponent},
  {path:'job-details/:ID/:companyID/:jobID',component:JObDetailsComponent,canActivate:[AuthenticationGuardService]},

  {path:'home-company/:ID',component:HomeCompanyComponent,canActivate:[AuthenticationGuardService]},
  {path:'post-job/:ID',component:PostJobComponent,canActivate:[AuthenticationGuardService]},
  {path:'submited-profiles/:ID',component:StudentsProfileSubmittedComponent,canActivate:[AuthenticationGuardService]},
  {path:'company-profile/:ID',component:CompanyProfileComponent,canActivate:[AuthenticationGuardService]},
  {path:'edit-company-profile/:ID',component:EditCompanyProfileComponent,canActivate:[AuthenticationGuardService]},
  

  {path:'admin/:ID',component:AllJobsComponent,canActivate:[AuthenticationGuardService]},
  {path:'manage-students',component:ManageStudentsComponent,canActivate:[AuthenticationGuardService]},
  {path:'manage-company',component:AllCompanyComponent,canActivate:[AuthenticationGuardService]},
  {path:'maneg-events',component:AllEventComponent,canActivate:[AuthenticationGuardService]},
  {path:'add-user',component:AddUsersComponent,canActivate:[AuthenticationGuardService]},
  {path:'add-event',component:AddEventComponent,canActivate:[AuthenticationGuardService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
