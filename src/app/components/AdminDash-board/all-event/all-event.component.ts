import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/Events/event.service';
import { error } from 'protractor';

@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.css']
})
export class AllEventComponent implements OnInit {
  public events:[];
  constructor(private eventser:EventService) { }

  ngOnInit() {
    this.eventser.listEvent().subscribe(

      data=>{
        this.events=data;
        
      }
    );
    
  }
 DeleteEvent(event){
  this.eventser.deletEvent(event._id).subscribe(
    data=>{
      console.log(data);
      
    },
    error=>{
      console.log(error);
      
    }
  );
  
 }
}
