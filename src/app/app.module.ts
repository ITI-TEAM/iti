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
import { ViewSProfileComponent } from './components/view-sprofile/view-sprofile.component';
import { AddUsersComponent } from './components/add-users/add-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    LognInComponent,
    NavBarComponent,
    StudentProfileComponent,
    ViewSProfileComponent,
    AddUsersComponent,

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
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
