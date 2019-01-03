import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  private _eventurl = "http://localhost:3000/api/events";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

//  deleteUser(name:String){

//   return this.http.delete(this._eventurl);
//  }
}
