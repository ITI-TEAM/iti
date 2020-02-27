import { Component, OnInit } from '@angular/core';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { SockectIoService } from 'src/app/services/socket .io/sockect-io.service';
import { Student } from '../../Classes/studentClass/student';
import { UserServService } from 'src/app/services/User/user-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {
  public studentsModel;

  constructor(private studeServise: StudentServiseService,private userServise:UserServService,private socketServ:SockectIoService,private router :Router) { }

  ngOnInit() {
    this.studeServise.getAll().subscribe(data => {
      this.studentsModel = data;
      console.log(this.studentsModel)
    }
    )
  }

  deleteStudent(student){
    this.userServise.deletUser(student.ID).subscribe(data=>
      {
        alert(" user deleted")
      }
      )
   }
  
   goToMoreDetails(ID)
      {
     window.open('student-profile/'+ID,"_blank")
    }
}

