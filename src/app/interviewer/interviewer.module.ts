import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { InterviewerdashboardComponent } from './interviewerdashboard/interviewerdashboard.component';
import { RouterModule } from '@angular/router';
import {route} from './routes';
@NgModule({
  imports: [
  
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [InterviewerdashboardComponent]
=======
import { EventenrollmentComponent } from './eventenrollment/eventenrollment.component';

import { RouterModule } from '@angular/router';
import {route} from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [EventenrollmentComponent]
>>>>>>> 85910826ba0b285c07716497e61a5dbc591e0d1a
})
export class InterviewerModule { }
