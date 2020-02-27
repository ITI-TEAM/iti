import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JOBService } from 'src/app/services/job.service';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';

declare var $: any;

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {

  public jobs=[];
  p: number = 1;
  public sectionsProfile = ["", ""]
  studentID: string;

  constructor(private router: Router, private route: ActivatedRoute, private jobServ: JOBService, private studetentServ:StudentServiseService) { }


  ngOnInit() {
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.studentID = params.get('ID');

    });
    this.jobServ.listAppliedJobs(this.studentID).subscribe(
      result => {
        for (var i = 0; i < result.length; i++) {
          this.jobServ.listJobNames(result[i].jobID).subscribe(
            data=>{
              this.jobs.push(data);
            console.log(this.jobs);
            },
            error=>{
              console.log(error);
              
            }
          );
        }
      },
      error => {
        console.log(error);

      }
    );

   
    

  }
  goDetails() {
    this.router.navigate(['/job-details']);

  }

  //cancel job after apply it
  cancelJob(job){
    this.studetentServ.cancelJob(job[0]._id).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
        
      }
    );
  }

}
