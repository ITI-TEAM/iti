import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }

  getStudetnMSG(studentID){
   return this.http.get<any>('http://localhost:3000/chat/studentMSG/'+studentID)
  }


  getCompanyMSG(companyID){
    return this.http.get<any>('http://localhost:3000/chat/studentMSG/'+companyID)
   }
 


  chatMessags(companyID,studentID){
    return this.http.get<any>('http://localhost:3000/chat/chatMSG/'+companyID+'/'+studentID)
  }


  newMsg(companyID,studentID,msg){
    return this.http.post('http://localhost:3000/chat/newMSG/'+companyID+'/'+studentID,msg)
  }



}
