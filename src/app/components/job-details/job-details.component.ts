import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JObDetailsComponent implements OnInit {

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
