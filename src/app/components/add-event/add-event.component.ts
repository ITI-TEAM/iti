import { Component, OnInit } from '@angular/core';
import { AddEvent } from '../Classes/add-event';
import { EventService } from 'src/app/services/Events/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private everntServ:EventService) { }
  public eventModel = new AddEvent('','','','','');
  ngOnInit() {
  }
  selecteFile:File=null;
  onfileSelected(event){
    console.log(event); 
    this.selecteFile=<File>event.target.files[0];
  }


  addEvent() {

    const fd=new FormData();
    // append image file
    fd.append('image',this.selecteFile,this.selecteFile.name);

    // add details from model
    fd.append('title',this.eventModel.title.toString());
    fd.append('date',this.eventModel.date.toString());
    fd.append('details',this.eventModel.details.toString());
    fd.append('place',this.eventModel.place.toString());
    


     this.everntServ.addEvent(fd).subscribe(

      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }

     );
     
   }



}
