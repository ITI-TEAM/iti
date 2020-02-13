import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-profile-submitted',
  templateUrl: './students-profile-submitted.component.html',
  styleUrls: ['./students-profile-submitted.component.css']
})
export class StudentsProfileSubmittedComponent implements OnInit {
  public jobs=["","",""]
  constructor() { }

  ngOnInit() {
  }

}
