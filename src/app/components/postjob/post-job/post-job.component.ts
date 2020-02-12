import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  enventstocomany =[
    {titel:'EVENT',obj:'ssssss'},
    {titel:'eeeeeeeeee',obj:'yyyyyyy'},
    {titel:'eeeeeeeeee',obj:'yyyyyyy'},{titel:'eeeeeeeeee',obj:'yyyyyyy'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
