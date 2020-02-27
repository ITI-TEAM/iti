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

  public company_ID;
  public companyModel= new Company("","","","","","","","","","");
  public selectedFile:File=null;
  public test:boolean=true;

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


  onfileSelected(event){
    console.log(event); 
    this.selectedFile=<File>event.target.files[0];
    console.log(this.selectedFile);
  }


  onSubmit(){
  
    const fd=new FormData();
    // append image file
    if(this.selectedFile==null){
      this.test=false;

    }
    else{
      fd.append('image',this.selectedFile,this.selectedFile.name);

  
     this.CompanyServise.updateCompany(this.company_ID,fd).subscribe(
      result=>{
        alert("changes saved")
       this.router.navigate(['/company-profile',this.company_ID])
  },
      error=>{
  
        console.log(error);
  
      }
      )
    }
    
  }

  
}

