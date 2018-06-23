import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.routes';
import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';
import { LandingpageComponent } from './registration/pages/landingpage/landingpage.component';

import { RouterModule , Routes} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminModule } from './admin/admin.module';
import { environment } from '../environments/environment';




import { EventService } from './admin/event.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RegistrationModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule,
    HttpModule,
    RouterModule.forRoot( routes )
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
