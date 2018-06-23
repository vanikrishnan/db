import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.routes';
import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';
import { LandingpageComponent } from './registration/pages/landingpage/landingpage.component';
<<<<<<< HEAD

import { RouterModule , Routes} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminModule } from './admin/admin.module';
import { environment } from '../environments/environment';




=======
import { RouterModule , Routes} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
>>>>>>> 6a30c9b7b24774d03bdb7819c5d6749f2045aef4
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
