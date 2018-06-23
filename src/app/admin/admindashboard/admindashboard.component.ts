import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
event;
  constructor(public eventService: EventService) {
    this.eventService.fetchData();
    this.event=this.eventService.data;
    console.log(this.event);
  } 

  ngOnInit() {
    

  }

}
