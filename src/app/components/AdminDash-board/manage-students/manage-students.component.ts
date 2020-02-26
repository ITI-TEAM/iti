import { Component, OnInit } from '@angular/core';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { SockectIoService } from 'src/app/services/socket .io/sockect-io.service';
import { Student } from '../../Classes/studentClass/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {
  public studentsModel;

  constructor(private router:Router,private studeServise: StudentServiseService,private socketServ:SockectIoService) { }

  ngOnInit() {

    this.studeServise.getAll().subscribe(data => {
      this.studentsModel = data;
      console.log(this.studentsModel)
    }
    )

    this.socketServ.getStudent().subscribe(
      data=>{
        this.studentsModel=data;
        console.log(data);
        
      },
      error=>{
        console.log(error);
        
      }
    );
  }


  DeleteUser(student){
    console.log(student.ID);
    this.socketServ.deleteStudent(student.ID);
    this.socketServ.getStudent().subscribe(
      data=>{
        console.log(data);
        
      },
      error=>{
        console.log(error);
        
      }
    );
    
  }


  goProfile(student){
    console.log(student.ID);
    
  //  this.router.navigate(['/show-student',student.ID]);
    window.open('/show-student/'+student.ID, "_blank");
  }


}

