import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventregisterComponent } from './eventregister/eventregister.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { route } from '../admin/routeevent';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { SkillmangementComponent } from './skillmangement/skillmangement.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MultiselectDropdownModule,
    RouterModule.forChild(route)
  ],
  declarations: [EventregisterComponent, SkillmangementComponent]
})
export class AdminModule { }
