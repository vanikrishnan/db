import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { CustomValidator } from './customvalidator';
@Component({
  selector: 'app-eventregister',
  templateUrl: './eventregister.component.html',
  styleUrls: ['./eventregister.component.css']
})
export class EventregisterComponent implements OnInit {
  currentYear;
  currentMonth;
  currentDate;
  eventregister;
  todaydate;
  skills = ['java' , 'angular' , 'react' , 'nodeJS' ];
  location = ['chennai', 'hyderabadh' , 'pune' , 'Bangalore' ];
  constructor() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth() + 1;
    if ( this.currentMonth < 10) {
      this.currentMonth = '0' + this.currentMonth;
    }
    this.currentDate = today.getDate();
    if ( this.currentDate < 10) {
      this.currentDate = '0' + this.currentDate;
    }
    this.todaydate = this.currentYear + '-' + this.currentMonth + '-' + this.currentDate;
    // console.log(this.todaydate);
    this.eventregister = new FormGroup({
      'eventname' :
      new FormControl('', [Validators.required , Validators.maxLength(15) , Validators.minLength(5)]),
      'eventdate' :
      new FormControl( this.todaydate, CustomValidator.datevalidate ),
      'timecheck': new FormGroup({
      'starttime' : new FormControl('', [Validators.required ]),
      'endtime' : new FormControl('', [Validators.required ]),
      }, CustomValidator.validatedate),
    });
   }

  ngOnInit() {
  }
  get eventname() {
    return this.eventregister.get('eventname');
  }
  get eventdate() {
    return this.eventregister.get('eventdate');
  }
  get timecheck() {
    return this.eventregister.get('timecheck');
  }
  get starttime() {
    return this.timecheck.get('starttime');
  }
  get endtime() {
    return this.timecheck.get('endtime');
  }
  checkform() {
    console.log(this.eventregister);
  }
}
