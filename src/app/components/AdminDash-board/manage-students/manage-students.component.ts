import { Component, OnInit } from '@angular/core';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {
public  studentsModel=[]

 filterData = [
  {
    firstName: 'Celestine',
    lastName: 'Schimmel',
    address: '7687 Jadon Port'
  },
  {
    firstName: 'Johan',
    lastName: 'Ziemann PhD',
    address: '156 Streich Ports'
  },
  {
    firstName: 'Lizzie',
    lastName: 'Schumm',
    address: '5203 Jordon Center'
  },
  {
    firstName: 'Gavin',
    lastName: 'Leannon',
    address: '91057 Davion Club'
  },
  {
    firstName: 'Lucious',
    lastName: 'Leuschke',
    address: '16288 Reichel Harbor'
  }
] 
constructor(private studeServise:StudentServiseService) { }

  ngOnInit() {
    this.studeServise.getAll().subscribe(data=>
      {
        this.studentsModel=data;
        console.log(this.studentsModel)
      }
    )}

}

