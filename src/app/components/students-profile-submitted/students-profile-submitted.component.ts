import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { error } from 'protractor';
import { UserServService } from 'src/app/services/User/user-serv.service';

@Component({
  selector: 'app-students-profile-submitted',
  templateUrl: './students-profile-submitted.component.html',
  styleUrls: ['./students-profile-submitted.component.css']
})
export class StudentsProfileSubmittedComponent implements OnInit {
  public jobs=["","",""]
  jobID: string;
  students=[];
  constructor(private router : Router,private jobServ:JOBService, private userServise:UserServService,private route:ActivatedRoute) { }

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

    
    // DeleteStu(student){
    //   this.userServise.deletUser(this.User_ID).subscribe(data=>
    //     {
    //       alert(" user deleted")
    //     }
    //     )
    //  }


  }

}
