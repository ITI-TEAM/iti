import { Component, OnInit } from '@angular/core';
import { Job } from '../../Classes/job';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { error } from 'util';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  constructor(private router:Router ,private route:ActivatedRoute,private jobServ:JOBService) { }
    jobModel=new Job("","","","","","","","");
    public ID;
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.ID=params.get('ID');
    }); 
  }

  postJob(){
    this.jobServ.createPost(this.ID,this.jobModel).subscribe(
      result=>{
        alert("Job Posted")
        this.router.navigate(['/home-company',this.ID]);
        },
      error=>{
        console.log(error)
      }
      )
  }
}
