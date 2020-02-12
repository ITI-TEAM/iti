import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LognInComponent } from './components/Login/logn-in/logn-in.component';
import { AuthenticationGuardService } from './services/Auth/authentication-guard.service';


const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'login',component:LognInComponent},
  {path:'student-profile',component:StudentProfileComponent,canActivate:[AuthenticationGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
