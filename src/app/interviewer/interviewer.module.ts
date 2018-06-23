import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventenrollmentComponent } from './eventenrollment/eventenrollment.component';

import { RouterModule } from '@angular/router';
import {route} from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [EventenrollmentComponent]
})
export class InterviewerModule { }
