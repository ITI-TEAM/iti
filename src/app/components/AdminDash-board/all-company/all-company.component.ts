import { Component, OnInit } from '@angular/core';
import { StudentServiseService } from 'src/app/services/student/student-servise.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserServService } from 'src/app/services/User/user-serv.service';


@Component({
  selector: 'app-all-company',
  templateUrl: './all-company.component.html',
  styleUrls: ['./all-company.component.css']
})
export class AllCompanyComponent implements OnInit {
public companyModel=[]
p: number = 1;
  constructor(private userServise:UserServService,private studeServise:StudentServiseService,private route:ActivatedRoute) { }
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
   
    

    deleteUser(_id){
      this.userServise.deletUser(this.User_ID).subscribe(data=>
        {
          alert(" user deleted")
        }
        )
     }
   

}
