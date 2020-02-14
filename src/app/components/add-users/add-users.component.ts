import { Component, OnInit } from '@angular/core';
import { AddUser } from '../Classes/add-user';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  topicHasErr=false;
  constructor() { }
  public userModel=new AddUser('','','','')
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
