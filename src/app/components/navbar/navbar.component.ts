import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { Student } from '../Classes/studentClass/student';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private studeServise:StudentServiseService,private route:ActivatedRoute) { }
  public ID;

  public student = new Student("","","","","","","",[],"","",[],[],[],"","","","");
  public student_id;
  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.ID=params.get('ID');
    });
    
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.student_id = params.get("ID")
      })
      this.studeServise.getStudent(this.student_id).subscribe(data=>
        {
          this.student=data[0];
          console.log( this.student)
        }
        )

  }


}
