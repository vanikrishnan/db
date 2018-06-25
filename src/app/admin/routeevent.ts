
import { Route } from '@angular/router';
import { EventregisterComponent } from './eventregister/eventregister.component';

import { SkillmangementComponent } from './skillmangement/skillmangement.component';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AnalysisComponent } from './analysis/analysis.component';

export const route: Route[] = [
  
  {
    path : 'skillmanagement',
    component : SkillmangementComponent
  },
  {
    path: 'eventregister',
    component: EventregisterComponent,
  },
  {
    path: 'analysis',
    component: AnalysisComponent,
  },
  {
    path: '',
    component: AdmindashboardComponent,
  }
    
];
