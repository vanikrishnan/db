import { Routes } from '@angular/router';
import { EventenrollmentComponent } from './eventenrollment/eventenrollment.component';
import {InterviewerdashboardComponent } from './interviewerdashboard/interviewerdashboard.component'
export const route: Routes = [
    {
      path: '',
      component: InterviewerdashboardComponent,
    },
    {
      path: '',
      component: EventenrollmentComponent,

    }

];
