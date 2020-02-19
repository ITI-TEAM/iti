import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/Events/event.service';

@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.css']
})
export class AllEventComponent implements OnInit {
  public events;
  constructor(private eventser:EventService) { }

  ngOnInit() {
    this.eventser.listEvent().subscribe(data=>this.events=data)

  }
 DeleteEvent(event_id){
  this.eventser.deletEvent(event_id).subscribe(
    response => console.log('delete from db', response),
    error => console.log('error',error)
  )
 }
}
