import { Component } from '@angular/core';
import { MyserviceService, User } from './myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprint2Angular';
  service:MyserviceService;
  router:Router;
  check:boolean=false;
  response: User;
  login: boolean;
  constructor(service:MyserviceService,  router:  Router) {
    this.service=service;
   this.router=router;
   }

  onSubmit(details:any)
  {
 console.log(details)
 if(details.userid>0 && details.pswd)
 {
  this.service.validate(details.userid,details.pswd).subscribe((data)=>{this.response=data
    if(this.response!=null)
    {
      alert("successfully loggedin")
      this.login=false;
    this.check=true;
    this.service.allCkeck(details.userid);
    }
    else{
      alert("Not a valid user")
    }
    })
 }
 else 
   alert("enter all details")
 
  }
  dat1(data){
    this.response=data
    if(this.response[0]!=null)
{
  console.log("hello"+this.response)
  this.router.navigate(['/main']);
}
else{
  alert("enter valid user name password");
}
   }
   loginCheck()
   {
     this.login=true;
   }

}
