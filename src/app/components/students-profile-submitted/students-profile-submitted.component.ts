import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { error } from 'protractor';

@Component({
  selector: 'app-students-profile-submitted',
  templateUrl: './students-profile-submitted.component.html',
  styleUrls: ['./students-profile-submitted.component.css']
})
export class StudentsProfileSubmittedComponent implements OnInit {
  public jobs=["","",""]
  jobID: string;
  students=[];
  constructor(private router : Router,private jobServ:JOBService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.jobID=params.get('ID');
    }); 
   
    this.jobServ.getsubmitedStudent(this.jobID).subscribe(
      result=>{
        for (var i=0; i<result.length; i++){
         this.jobServ.listSprofile(result[i].studentID).subscribe(
           data=>{
             console.log(data);
             this.students.push(data);
           },
           error=>{
             console.log(error);
             
           }
         );
          
        }        
      },
      error=>{
        console.log(error);
        
      }
    );


  }

  MoreDetails(ID)
      {
     window.open('student-profile/'+ID,"_blank")
    }
}
