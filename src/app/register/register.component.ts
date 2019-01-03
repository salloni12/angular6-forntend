import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

import { Router } from '@angular/router';

import { AfService } from '../providers/af.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData={}
  constructor(private _auth:AuthService,public AfService:AfService,private _router:Router) { }

  ngOnInit() {
  }


  login(){
    this.AfService.loginWithGoogle();
  }

  registerUser(){
    console.log("this.registerUserData "+this.registerUserData);

    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token',res.token);
        this._router.navigate(['/login']);
      

      },
      err=>
      //console.log(err)
       alert("something worng!!please try again..")
    )
  }

}
