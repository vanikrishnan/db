
import { Route } from '@angular/router';
import { EventregisterComponent } from './eventregister/eventregister.component';
import { SkillmangementComponent } from './skillmangement/skillmangement.component';
export const route: Route[] = [
    {
      path : 'skillmanagement',
      component : SkillmangementComponent
    },
    {
      path: '',
      component: EventregisterComponent,
    }
];
