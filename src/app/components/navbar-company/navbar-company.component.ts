import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Company } from '../Classes/company';
import { CompanyService } from 'src/app/services/Company/company.service';
declare var $: any;
@Component({
  selector: 'app-navbar-company',
  templateUrl: './navbar-company.component.html',
  styleUrls: ['./navbar-company.component.css']
})
export class NavbarCompanyComponent implements OnInit {

  constructor(private router:Router ,private route:ActivatedRoute,private compServ:CompanyService) { }
  public ID;
  public company=new Company('','','','','','','','','','');
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.ID=params.get('ID');
    });

    this.compServ.getCompany(this.ID).subscribe(
      data=>{
        console.log(data);
        this.company=data;

      },
      error=>{
        console.log(error);
        
      }
    );


    
    
    //jquery
$(window).scroll(function(){
  var $w = $(this),
      st = $w.scrollTop(),
      navbar = $('.ftco_navbar'),
      sd = $('.js-scroll-wrap');

  if (st > 150) {
    if ( !navbar.hasClass('scrolled') ) {
      navbar.addClass('scrolled');	
    }
  } 
  if (st < 150) {
    if ( navbar.hasClass('scrolled') ) {
      navbar.removeClass('scrolled sleep');
    }
  } 
  if ( st > 350 ) {
    if ( !navbar.hasClass('awake') ) {
      navbar.addClass('awake');	
    }
    
    if(sd.length > 0) {
      sd.addClass('sleep');
    }
  }
  if ( st < 350 ) {
    if ( navbar.hasClass('awake') ) {
      navbar.removeClass('awake');
      navbar.addClass('sleep');
    }
    if(sd.length > 0) {
      sd.removeClass('sleep');
    }
  }
});
  }

  logOut(){
    localStorage.removeItem("token")
    this.router.navigate(['/login'])
  }



 

}
