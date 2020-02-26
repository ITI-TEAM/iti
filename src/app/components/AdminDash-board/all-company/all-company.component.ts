import { Component, OnInit } from '@angular/core';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SockectIoService } from 'src/app/services/socket .io/sockect-io.service';


@Component({
  selector: 'app-all-company',
  templateUrl: './all-company.component.html',
  styleUrls: ['./all-company.component.css']
})
export class AllCompanyComponent implements OnInit {
public companyModel=[]

  constructor(private studeServise:StudentServiseService,private route:ActivatedRoute) { }
  public User_ID;
  ngOnInit() {
    this.studeServise.getAllCompany().subscribe(data=>
      {
        this.companyModel=data;
        console.log(this.companyModel)
      }
    )
  // DELETE USER
    // this.route.paramMap.subscribe((params:ParamMap)=>{
    //   this.User_ID = params.get('ID');
    // });
    

  }
   
    

    // deleteUser(_id){
    //   this.studeServise.deleteCompany(this.User_ID).subscribe(data=>
    //     {
    //       alert(" user deleted")
    //     }
    //     )
    //  }
   

}
