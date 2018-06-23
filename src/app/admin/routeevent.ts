
import { Route } from '@angular/router';
import { EventregisterComponent } from './eventregister/eventregister.component';

import { SkillmangementComponent } from './skillmangement/skillmangement.component';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

export const route: Route[] = [
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
  },
    {
      path : 'skillmanagement',
      component : SkillmangementComponent
    },
    {
      path: '',
      component: EventregisterComponent,
    }
];
