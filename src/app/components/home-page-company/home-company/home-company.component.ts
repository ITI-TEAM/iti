import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { error } from 'protractor';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {
    enventstocomany =[
      {titel:'EVENT',obj:'ssssss'},
      {titel:'eeeeeeeeee',obj:'yyyyyyy'},
      {titel:'eeeeeeeeee',obj:'yyyyyyy'},{titel:'eeeeeeeeee',obj:'yyyyyyy'}
    ]
  constructor(private router:Router ,private route:ActivatedRoute,private jobServ:JOBService) { }
    public companyID;
    public jobs =[];
    ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.companyID=params.get('ID');
    }); 
    this.jobServ.getCompanyPosts(this.companyID).subscribe(
      result=>{
        this.jobs=result
      },
      error=>{
        console.log(error);
      }
    );    
  }
  onSelect(job){
   this.router.navigate(['/submited-profiles',job._id]);
    
  }
}
