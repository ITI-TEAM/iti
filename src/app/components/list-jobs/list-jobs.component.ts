import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  public jobs=["","",""]
  public sectionsProfile=["",""]
  constructor(private router : Router) { }

  ngOnInit() {
  }
  goDetails(){
    this.router.navigate(['/job-details']);

  }

}
