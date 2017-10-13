import { BrowserModule } from '@angular/platform-browser';
import * as $ from 'jquery';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTableModule } from "../../node_modules/angular2-datatable";

import {DataService} from './services/data.service';
import { AuthenticateService } from './services/authenticate.service';
import { AboutComponent } from './components/about/about.component';
import { PatientComponent } from './components/patient/patient.component';
import { SigninComponent } from './components/signin/signin.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'/signin', pathMatch: 'full'},
  {path:'signin', component:SigninComponent},
  {path:'record-behaviour', component:PatientComponent},
  {path:'patients', component:PatientListComponent},
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
    PatientListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    AuthenticateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
