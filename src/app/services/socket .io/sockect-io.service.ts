import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SockectIoService {

  socket: SocketIOClient.Socket;
  constructor() {
    this.socket = io('http://localhost:3000');
  }
 
   getPosts(){
    let posts=new Observable(observer=>{
      this.socket.on('getPosts',data=>{
        observer.next(data);
      })
    })
    return posts;
   }

   newPost(data){
     this.socket.emit('newPost',data)
   }

   // get all event
   getEvents(){
    let events=new Observable(observer=>{
      this.socket.on('getEvents',data=>{
        observer.next(data);
      })
    })
    return events;
   }

   //delete event

   deleteEvent(data){
    this.socket.emit('deleteEvent',data);
   }

// get all student user

  
// get all student 

getStudent(){
  let studetns=new Observable(observer=>{
    this.socket.on('getStudent',data=>{
      observer.next(data);
    })
  })
  return studetns;
}


// deleteStudent
deleteStudent(userID){
  this.socket.emit('deleteStudent',userID);
}  


// getCompnay
getCompnay(){

  let companys=new Observable(observer=>{
    this.socket.on('getCompnay',data=>{
      observer.next(data);
    })
  })
  return companys;
}

//deleteCompany

deleteCompany(userID){
  this.socket.emit('deleteCompany',userID)
}

}
