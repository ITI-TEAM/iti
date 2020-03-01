import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ChatService } from 'src/app/services/chat/chat.service';
import { Message } from '../../Classes/message';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router : Router,private chat:ChatService) { }
 public messges;
 public studentID;
 public companyID;
 public msg=new Message('');
 

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
     
      this.companyID=params.get('companyID');
      this.studentID=params.get('studentID');

    });
    console.log(this.studentID+"  "+this.companyID)

    this.chat.chatMessags(this.companyID,this.studentID).subscribe(
      data=>{
      console.log(data.result);
       console.log(data.result.length);
       this.messges=data.result;

        
      },
      error=>{
        console.log(error);
        
      }
    );
   
   
    

  }
  sendMsg(){
    this.chat.newMsg(this.companyID,this.studentID,this.msg).subscribe(
      data=>{
        console.log(data);
        
      },
      error=>{
        console.log(error);
        
      }
    );
    
  }



}
