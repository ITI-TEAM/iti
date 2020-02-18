import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddEvent } from 'src/app/components/Classes/add-event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

// Add Event
  addEvent(myEvent:AddEvent) {
   
     return this.http.post('http://localhost:3000/event/addevent',myEvent);
   }

// List Event
  listEvent():Observable<any>{

     return this.http.get("http://localhost:3000/event/listevent")
   }

//Event delete by _id
 deletEvent(Event_id):Observable<any>{
 
     return this.http.get("http://localhost:3000/event/deleteevent/"+Event_id);
   }
}
