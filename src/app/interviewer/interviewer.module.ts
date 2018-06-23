import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventenrollmentComponent } from './eventenrollment/eventenrollment.component';
import { InterviewerdashboardComponent } from './interviewerdashboard/interviewerdashboard.component';
import { RouterModule } from '@angular/router';
import {route} from './routes';
@NgModule({
  imports: [
  
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [InterviewerdashboardComponent, EventenrollmentComponent]
})
export class InterviewerModule { }
