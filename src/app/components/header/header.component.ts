import { Component, OnInit } from '@angular/core';
import { CompanyRequist } from '../Classes/requistClass/company-requist';
import { CompanyRequistService } from 'src/app/services/CompanyRequist/company-requist.service';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public requistModle =  new CompanyRequist('','','');
 topicHasErr=false;
 errorMsg;
 test=true;
  constructor(private comrequist:CompanyRequistService) { }

  ngOnInit() {
    $('.navTrigger').click(function () {
      $(this).toggleClass('active');
      console.log("Clicked menu");
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
  
  });
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

  
  }

  ValidateTopic(topicValue)
  {
   if(topicValue==='default')
  {
   this.topicHasErr=true;
  }
   else
  {
   this.topicHasErr=false;
  }
  }


  addRequist(){
    this.comrequist.addCompanyRequis(this.requistModle).subscribe(
     data=>{
       console.log("add Requist");
       alert("add Requist");
       window.location.reload();
      
     },
     error=>{
       this.test=false;
       this.errorMsg=error.error.message;
      
     }
    );
    
  }

}
