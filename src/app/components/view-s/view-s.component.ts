import { Component, OnInit } from '@angular/core';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Student } from '../Classes/studentClass/student';
@Component({
  selector: 'app-view-s',
  templateUrl: './view-s.component.html',
  styleUrls: ['./view-s.component.css']
})
export class ViewSComponent implements OnInit {
  public student = new Student("","","","","","","",[],"","",[],[],[],"","","","");
  public student_id;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  constructor(private studeServise:StudentServiseService,private route:ActivatedRoute) { }

  ngOnInit() {
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
