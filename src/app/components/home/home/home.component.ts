import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts =[
    {  companey: "modern",name:"aaaaaaaaaaaaaaaaaaaa", photourl:'../../../../assets/images/heba.jpg'},
    {  companey: "iti",name:"bbbbbbbbbbbbbbbbbbbb", photourl:'../../../../assets/images/heba.jpg'},

    {  companey: "www",name:'zzzzzzzzzzzzzzzzzz', photourl:'../../../../assets/images/heba.jpg'},
    ]
    envents=[
      {titel:'EVENT',obj:'ssssss'},
      {titel:'eeeeeeeeee',obj:'yyyyyyy'},
      {titel:'eeeeeeeeee',obj:'yyyyyyy'},{titel:'eeeeeeeeee',obj:'yyyyyyy'}
    ]
  
  constructor() { }

  ngOnInit() {
  }


}
