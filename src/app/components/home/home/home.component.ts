import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
    jobs=[];

      studentID;
      ID=this.studentID;
      jobID;
    envents=[
      {titel:'EVENT',obj:'ssssss'},
      {titel:'eeeeeeeeee',obj:'yyyyyyy'},
      {titel:'eeeeeeeeee',obj:'yyyyyyy'},{titel:'eeeeeeeeee',obj:'yyyyyyy'}
    ]
  
  constructor(private router : Router,private jobServ:JOBService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.ID=params.get('ID');
    }); 

    this.jobServ.allJobs().subscribe(
      data=>{
      this.jobs=data;        
      },
error=>{
  console.log(error);
  
}

    );
  }
  goDetails(job){
    this.router.navigate(['/job-details',this.ID,job.companyID,job._id]);

  }

}
