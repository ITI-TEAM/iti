import { Component, OnInit } from '@angular/core';
import { AddEvent } from '../Classes/add-event';
import { EventService } from 'src/app/services/Event/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService:EventService) { }
  public eventModel = new AddEvent('','','','',null)

  ngOnInit() {
  }
  onfileSelected(event){
    console.log(event)
   // this.eventModel.imge=<File>event.target.files[0];
  }

  addEvent() {
    const fd=new FormData();
   // fd.append('imge',this.eventModel.imge)
     this.eventService.addEvent(this.eventModel).subscribe(

      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }

     );
     //console.log("test");
    /* this.eventService.listEvent().subscribe(data=>{
       console.log(data);
     },
     error=>{
       console.log(error)
     }
     
     
     );*/
     
   }

}
