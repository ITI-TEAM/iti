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
  /*
  allUsers() {
    let users=new Observable(observer=>{
      this.socket.on('allUsers',data=>{
        observer.next(data);
      })
    })
    return users;
   }
*/
   


}
