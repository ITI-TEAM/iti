import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  studentID;
 public chats;
  constructor(private route:ActivatedRoute,private router : Router,private chat:ChatService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.studentID=params.get('ID');
    });



    this.chat.getChats(this.studentID).subscribe(
      data=>{
        this.chats=data.result;
        console.log(this.chats);
        
      },
      error=>{
        console.log(error);
        
      }
    );

  }
  readMore(chat){
    this.router.navigate(['readMore',chat.companyID,chat.studentID],{relativeTo:this.route});

  }
}
