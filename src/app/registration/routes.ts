
import { Route } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';

import {LoginComponent}from './pages/login/login.component';

export const route: Route[] = [

    {
      path: '',
      component: LandingpageComponent,
    },
    {
      path:'login',
      component:LoginComponent,
    },
    
];
