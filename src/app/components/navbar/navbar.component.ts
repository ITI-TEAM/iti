import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  studentHome()
  {
    
    this.router.navigate(['/student-home']);

  }
  editProfile(){
    this.router.navigate(['/edit-student-profile']);

  }
  listJobs(){
    
    this.router.navigate(['/list-jobs']);

  }
}
