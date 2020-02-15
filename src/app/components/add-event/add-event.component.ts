import { Component, OnInit } from '@angular/core';
import { AddEvent } from '../Classes/add-event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor() { }
  public eventModel = new AddEvent('','','','')
  ngOnInit() {
  }

}
