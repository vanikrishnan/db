import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class EventService {
  url = 'https://event-dashboard-2f231.firebaseio.com/Eventdashboard.json';
data;
  constructor(private httpservice: Http) {
   }

   fetchData() {
    this.httpservice.get(this.url)
    .subscribe(rsp => {
      console.log(rsp);
       this.data = rsp.json();
   });

  }
}
