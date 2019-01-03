import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

//import { Angular2SocialLoginModule } from 'angular2-social-login';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material.module';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

import { AfService } from './providers/af.service';

import { AuthGuard } from './auth.guard';

var fireconfig = {
  apiKey: "AIzaSyBKZVi9TO-fd1cWPMlaLRveQK_mDXoWiM4",
  authDomain: "buildingappwithangularfi-25861.firebaseapp.com",
  databaseURL: "https://buildingappwithangularfi-25861.firebaseio.com",
  projectId: "buildingappwithangularfi-25861",
  storageBucket: "buildingappwithangularfi-25861.appspot.com",
  messagingSenderId: "387785663622"
};

// let socialloginproviders = {
//   "google": {
//     "clientId": "964406661370-7rg89tvpb3ukki4gtq1q37qi5mb595h3.apps.googleusercontent.com"
//   }
// }


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent

  ],
  imports: [
    FormsModule, HttpModule, HttpClientModule, AngularFireModule.initializeApp(fireconfig), AngularFireAuthModule,
    BrowserModule, MaterialModule, AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([


      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
      { path: 'special', component: SpecialEventsComponent }


    ])

  ],
  providers: [AuthService, AfService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Angular2SocialLoginModule.loadProvidersScripts(socialloginproviders);
