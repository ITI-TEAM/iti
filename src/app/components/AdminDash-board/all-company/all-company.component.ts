import { Component, OnInit } from '@angular/core';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';


@Component({
  selector: 'app-all-company',
  templateUrl: './all-company.component.html',
  styleUrls: ['./all-company.component.css']
})
export class AllCompanyComponent implements OnInit {
public companyModel=[]
  constructor(private studeServise:StudentServiseService) { }
  
  ngOnInit() {
    this.studeServise.getAllCompany().subscribe(data=>
      {
        this.companyModel=data;
        console.log(this.companyModel)
      }
    )}
  

}
