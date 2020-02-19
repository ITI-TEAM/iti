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
  public companyModel= new Company("Enter youe name","Enter your careerobjective","Enter your content","Enter your email","Enter your address",58,"Enter your field","Enter your description",55)
  public company=[]
  public company_ID;
  constructor(private CompanyServise:CompanyService ,private route:ActivatedRoute, private router:Router ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.company_ID=params.get('ID');

    });
    this.CompanyServise.getCompany(this.company_ID).subscribe(data=>{
      this.company=data[0];
      console.log(this.company)
    })
   
  }

}
// onsubmit(){
//   this.companyServise.updatecompany(this.company_id,this.studentModel).subscribe(
//     result=>{
//       alert("changes saned")
//       this.router.navigate(['/company-profile',this.company_ID])
//     },
//     error=>{
//       console.log(error)
//     }
    
//   )
// }
