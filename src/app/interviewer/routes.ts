import { EventenrollmentComponent } from './eventenrollment/eventenrollment.component';
import { Routes } from '@angular/router';
import {InterviewerdashboardComponent} from './interviewerdashboard/interviewerdashboard.component'
export const route: Routes = [
    {
      path: 'interviewerdashboard',
      component: InterviewerdashboardComponent,
    },
    {
      path: '',
      component: EventenrollmentComponent,

    }
];
