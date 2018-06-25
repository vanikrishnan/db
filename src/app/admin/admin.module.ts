import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventregisterComponent } from './eventregister/eventregister.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { route } from '../admin/routeevent';

import { SkillmangementComponent } from './skillmangement/skillmangement.component';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EventService } from './event.service';
import { AnalysisComponent } from './analysis/analysis.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ],

  providers: [EventService],
  declarations: [EventregisterComponent, AdmindashboardComponent,SkillmangementComponent, AnalysisComponent]

})
export class AdminModule { }
