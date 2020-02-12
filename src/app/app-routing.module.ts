import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LognInComponent } from './components/Login/logn-in/logn-in.component';
import { AuthenticationGuardService } from './services/Auth/authentication-guard.service';
import { JObDetailsComponent } from './components/job-details/job-details.component';
import { HomeComponent } from './components/home/home/home.component';
import { HomeCompanyComponent } from './components/home-page-company/home-company/home-company.component';


const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'login',component:LognInComponent},
  {path:'student-home',component:HomeComponent,canActivate:[AuthenticationGuardService]},
  {path:'student-profile',component:StudentProfileComponent,canActivate:[AuthenticationGuardService]},
  {path:'job-details',component:JObDetailsComponent,canActivate:[AuthenticationGuardService]},
  {path:'home-company',component:HomeCompanyComponent,canActivate:[AuthenticationGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
