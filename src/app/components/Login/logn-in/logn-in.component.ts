import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/user';



@Component({
  selector: 'app-logn-in',
  templateUrl: './logn-in.component.html',
  styleUrls: ['./logn-in.component.css']
})
export class LognInComponent implements OnInit {

  constructor() { }
  userModel=new user('','');
  ngOnInit() {
  }
  test(){
    console.log('test');
    
    }
}
