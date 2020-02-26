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
p: number = 1;
  constructor(private studeServise:StudentServiseService,private route:ActivatedRoute,private socketServ:SockectIoService) { }
  public User_ID;
  ngOnInit() {
    this.studeServise.getAllCompany().subscribe(data=>
      {
        this.companyModel=data;
        console.log(this.companyModel)
      }
    );

    this.socketServ.getCompnay().subscribe(
      data=>{
        console.log(data);
        
      },
      error=>{
        console.log(error);
        
      }
    );
     


  
  }
   
    

     deleteUser(company){
       console.log(company.ID);
       this.socketServ.getCompnay().subscribe(
        data=>{
          console.log(data);
          
        },
        error=>{
          console.log(error);
          
        }
      );
       
     }
   

}
