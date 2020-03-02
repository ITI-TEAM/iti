import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }

  getChats(studentID){
    return this.http.get<any>('http://localhost:3000/chat/chats/'+studentID);
  }

  getChatMessages(chatID){
    return this.http.get<any>('http://localhost:3000/message/messages/'+chatID);
  }



}
