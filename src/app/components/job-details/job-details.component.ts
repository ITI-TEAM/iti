import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';

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
  constructor(private router : Router,private jobServ:JOBService,private route:ActivatedRoute) { }
  public test:boolean=true;
  public ID;
  public jobID;
  public companyID;
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.ID=params.get('ID');
      this.companyID=params.get('companyID');
      this.jobID=params.get('jobID');
    }); 
  }
  applytoJob(){
    console.log(this.ID);
    console.log(this.companyID);
    console.log(this.jobID);
    this.jobServ.applyJob(this.ID,this.jobID).subscribe(
      result=>{
        alert("You Applied To Job ")
        this.router.navigate(['/student-home',this.ID]);
        console.log(result);
        
      },
      error=>{
        this.test=false
        console.log(error);
        
      }
    );
    
    
  }

}
