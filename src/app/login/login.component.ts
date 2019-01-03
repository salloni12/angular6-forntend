import { Component, OnInit, HostBinding } from '@angular/core';



import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData={

  }
  
  constructor(public _auth:AuthService,private _router:Router) { 


  }
  ngOnInit() {}

  loginUser(){

    console.log("nstdf"+JSON.stringify(this.loginUserData));
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token',res.token);
        this._router.navigate(['/events'])
      
         
      },
      err=>
     
      alert(" you are not existing user!!!")
    
      
    )
  

  }

}
