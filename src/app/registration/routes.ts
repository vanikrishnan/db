
import { Route } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { AdminregistrationComponent } from './pages/adminregistration/adminregistration.component';

import {LoginComponent} from './pages/login/login.component';

export const route: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'adminreg',
    component: AdminregistrationComponent,
  },
    {
      path: '',
      component: LandingpageComponent,

    }
   
];
