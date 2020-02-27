import { Component, OnInit } from '@angular/core';
import { Job } from '../../Classes/job';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { error } from 'util';
import { CompanyService } from 'src/app/services/Company/company.service';
import { Company } from '../../Classes/company';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  time=new Date().toUTCString();
  constructor(private router:Router ,private route:ActivatedRoute,private jobServ:JOBService,private CompanyService:CompanyService) { }

    public jobModel=new Job("","","","",[],"","","",[],"",this.time);
    public ID;
    public companyModel =new Company("","","","","","","","","","");
    
  ngOnInit() {
    //get id from url
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.ID=params.get('ID');
    });
    //get data company
    this.CompanyService.getCompany(this.ID).subscribe(data=>
      {
        console.log(data)
       this.companyModel=data;
      }
      );
    

  }

//post job
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
