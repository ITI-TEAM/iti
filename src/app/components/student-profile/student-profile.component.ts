import { Component, OnInit } from '@angular/core';
import { Student } from '../Classes/studentClass/student';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  public studentModel = new Student("","","","","","","",[],"","",[],[],[],"","","","")
   public Student_ID;

  constructor(private studeServise:StudentServiseService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.Student_ID=params.get('ID');
    }); 
    this.studeServise.getStudent(this.Student_ID).subscribe(data=>
      {
        this.studentModel=data[0];
        console.log( this.studentModel);
      }
      )
}


onSubmit(){
   this.studeServise.updateStudent(this.Student_ID,this.studentModel).subscribe(
    result=>{
      alert("changes saved")
      this.router.navigate(['/student-profile',this.Student_ID]);
      },
    error=>{
      console.log(error)
    }
    )
}
}


