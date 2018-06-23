import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EventService {
<<<<<<< HEAD
  url = 'https://event-dashboard-2f231.firebaseio.com/Event dashboard.json';
  data;
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth() + 1; // since January is 0!
  yyyy = this.today.getFullYear();
  upcomingevent;
  recentevent;
  edate;
  day;
  constructor(private httpservice: Http) {
    this.upcomingevent = [];
    this.recentevent = [];
  }

  fetchData() {
=======
  url = 'https://event-dashboard-2f231.firebaseio.com/Eventdashboard.json';
data;
  constructor(private httpservice: Http) {
   }

   fetchData() {
>>>>>>> 22ba2917a3e36f39405b0aa5d80709c02f2c52c5
    this.httpservice.get(this.url)
      .subscribe(rsp => {
        console.log(rsp.json());
        this.data = rsp.json();
        for (var key in this.data) {
          this.edate = this.data[key]['eventDate'];
          this.day = this.edate.split('/')
          if (parseInt(this.day[2]) > this.yyyy) {
            this.upcomingevent.push(this.data[key]);
          }
          else if ((parseInt(this.day[2]) == this.yyyy)) {
            if (parseInt(this.day[0]) == this.mm) {
              if (parseInt(this.day[1]) > this.dd) {
                this.upcomingevent.push(this.data[key]);
              }
              else {
                this.recentevent.push(this.data[key]);
              }
            }
            else if (parseInt(this.day[0]) > this.mm) {
              this.upcomingevent.push(this.data[key]);
            }
            else {
              this.recentevent.push(this.data[key]);
            }
          }
          else {
            this.recentevent.push(this.data[key]);
          }
        }
        console.log(this.upcomingevent);
        console.log(this.recentevent)
      });

  }
}
