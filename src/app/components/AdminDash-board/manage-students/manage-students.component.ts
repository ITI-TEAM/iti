import { Component, OnInit } from '@angular/core';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {
public  studentsModel=[]

constructor(private studeServise:StudentServiseService) { }

  ngOnInit() {
    this.studeServise.getAll().subscribe(data=>
      {
        this.studentsModel=data;
        console.log(this.studentsModel)
      }
    )}

}

