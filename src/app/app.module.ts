import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.routes';

import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';
import { LandingpageComponent } from './registration/pages/landingpage/landingpage.component';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RegistrationModule,
    AdminModule,
    RouterModule.forRoot( routes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
