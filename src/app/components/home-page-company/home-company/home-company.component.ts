import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {
  jobs =[
    {  yourcompaney: "me",title:"aaa",content:'aaaaaaaaaaaaaa', photourl:'../../../../assets/images/ahmedSalah.jpg'},
    {  yourcompaney: "me",title:"aaa",content:'aaaaaaaaaaaaaa', photourl:'../../../../assets/images/ahmedSalah.jpg'},
    {  yourcompaney: "me",title:"aaa",content:'aaaaaaaaaaaaaa', photourl:'../../../../assets/images/ahmedSalah.jpg'},
    {  yourcompaney: "me",title:"aaa",content:'aaaaaaaaaaaaaa', photourl:'../../../../assets/images/ahmedSalah.jpg'}

    ]
    enventstocomany =[
      {titel:'EVENT',obj:'ssssss'},
      {titel:'eeeeeeeeee',obj:'yyyyyyy'},
      {titel:'eeeeeeeeee',obj:'yyyyyyy'},{titel:'eeeeeeeeee',obj:'yyyyyyy'}
    ]
  constructor() { }

  ngOnInit() {
  }
 

}
