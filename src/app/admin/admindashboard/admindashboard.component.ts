import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
    event;
    recentevents;
    recentcontent;
    upcomingevents;
   today = new Date();
   dd= this.today.getDate();
   mm = this.today.getMonth() + 1; // since January is 0!
   yyyy = this.today.getFullYear();
  constructor(public eventService: EventService) {
    this.recentcontent=[];
    this.eventService.fetchData();
    this.event=this.eventService.data;
    this.recentevents = this.eventService.recentevent;
    this.upcomingevents=this.eventService.upcomingevent;
    console.log('recent',this.recentevents);
  
    this.recentevents.sort(function(a,b){
      return (new Date(a.eventDate).getTime())-(new Date(b.eventDate).getTime());
    }) 
    console.log(this.recentevents);
    this.splitevents();
  }
 splitevents() {
   for(var i=0;i<5;i++){
     this.recentcontent.push(this.recentevents[i]);
   }
 }
 

  ngOnInit() {
    

  }

}
