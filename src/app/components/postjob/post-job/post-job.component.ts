import { Component, OnInit } from '@angular/core';
import { Job } from '../../Classes/job';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { error } from 'util';
import { SockectIoService } from 'src/app/services/socket .io/sockect-io.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  constructor(private router:Router ,private route:ActivatedRoute,private jobServ:JOBService,private socketServ:SockectIoService) { }
    jobModel=new Job("socket","socket","socket","socket","socket","socket","socket","socket");
    public ID;
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.ID=params.get('ID');
    }); 


  }
  postJob(){
   console.log("CLICK ON");
   
  }


}
