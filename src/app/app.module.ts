import { BrowserModule } from '@angular/platform-browser';
import * as $ from 'jquery';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';

import {DataService} from './services/data.service';
import { AuthenticateService } from './services/authenticate.service';
import { AboutComponent } from './components/about/about.component';
import { PatientComponent } from './components/patient/patient.component';
import { SigninComponent } from './components/signin/signin.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'/signin', pathMatch: 'full'},
  {path:'signin', component:SigninComponent},
  {path:'record-behaviour', component:PatientComponent},
  {path:'patients', component:UserComponent},
  {path:'user', component:UserComponent},
  {path:'about', component:AboutComponent},
  {path:'**', redirectTo:'/signin'},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    PatientComponent,
    SigninComponent,
    TopNavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    AuthenticateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
