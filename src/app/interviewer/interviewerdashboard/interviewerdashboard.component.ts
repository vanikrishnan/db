import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewerdashboard',
  templateUrl: './interviewerdashboard.component.html',
  styleUrls: ['./interviewerdashboard.component.css']
})
export class InterviewerdashboardComponent implements OnInit {

 
title;   

constructor(){
this.title = "hello";
}

  ngOnInit() {
  }

}
