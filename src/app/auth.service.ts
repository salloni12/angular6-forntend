import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerurl = "http://localhost:3000/register";

  private _loginurl = "http://localhost:3000/login";

  constructor(private http: HttpClient,private _router:Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerurl, user);
  }

  loginUser(user) {
    console.log("sdgsdf"+JSON.stringify(user));
    return this.http.post<any>(this._loginurl,user );
  }

  loggedIn(){

    return !!localStorage.getItem('token');
  }

  logoutuser(){

    localStorage.removeItem('token');
    this._router.navigate(['/login'])
    
  }

}


