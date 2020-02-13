import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  topicHasErr=false;
  constructor() { }

  ngOnInit() {
  }

  ValidateTopic(topicValue)
  {
   if(topicValue==='default')
  {
   this.topicHasErr=true;
  }
   else
  {
   this.topicHasErr=false;
  }
  }
}
