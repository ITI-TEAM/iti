import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { EventService } from 'src/app/services/Events/event.service';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { SockectIoService } from 'src/app/services/socket .io/sockect-io.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
    jobs=[];
    p: number = 1;
      studentID;
      ID=this.studentID;
      jobID;
    envents=[]
    prostudent=[];
  constructor(private router : Router,private jobServ:JOBService,private route:ActivatedRoute,private eventss:EventService,private student:StudentServiseService) { }

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
    this.eventss. listEvent().subscribe(
      data=>{
      this.envents=data;        
      },
    error=>{
    console.log(error);
    
    })
    this.student.getStudent('5e526537c3a98111849d1d28').subscribe(
      data=>{
        this.prostudent=data[0]
        console.log(data);
        
      },
      error=>{
        console.log(error);
        
      }
    )
      
  }
  goDetails(job){
    this.router.navigate(['/job-details',this.ID,job.companyID,job._id]);

  }
  

}
