import { Component, OnInit, RootRenderer } from '@angular/core';
import { Company } from '../../Classes/company';
import { CompanyService } from 'src/app/services/Company/company.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-edit-company-profile',
  templateUrl: './edit-company-profile.component.html',
  styleUrls: ['./edit-company-profile.component.css']
})
export class EditCompanyProfileComponent implements OnInit {

  public companyModel= new Company("company name ?","career objective","contetnt ?","email ?","address ?","phone ?","field ?","decreption ?","date created ?");
  public company_ID;
  public company= new Company("","","","","","","","","");

  constructor(private CompanyServise:CompanyService ,private route:ActivatedRoute, private router:Router ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.company_ID=params.get('ID');

    });
    this.CompanyServise.getCompany(this.company_ID).subscribe(data=>{
      this.companyModel=data;
      console.log(this.companyModel)
      console.log(data);
      
    })
   
  }
  onSubmit(){
    this.CompanyServise.updateCompany(this.company_ID ,this.companyModel).subscribe(
      result=>{
        alert("changes saned")
        this.router.navigate(['/company-profile',this.company_ID])
      },
      error=>{
        console.log(error)
      }
      
    )
  }

  
}

