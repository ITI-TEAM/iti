import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/Company/company.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  public company=[]
  public company_id;
  constructor(private CompanyService:CompanyService, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.company_id=params.get("ID")
    })
    this.CompanyService.getCompany(this.company_id).subscribe(data=>
      {
        this.company=data[0];
        console.log(this.company)
      }
      )
  }


}
