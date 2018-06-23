
import { Route } from '@angular/router';
import { EventregisterComponent } from './eventregister/eventregister.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
export const route: Route[] = [
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
  },
    {
      path: '',
      component: EventregisterComponent,
    }
];
