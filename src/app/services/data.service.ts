import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Patient } from  '../models/patient';
import { DummyPatients } from '../dummy-patients';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";


@Injectable()
export class DataService {
  static nextPatientID  = 3;
  private patients$: BehaviorSubject<Patient[]> = new BehaviorSubject<Patient[]>(DummyPatients); // Observable
  private patient:any;

  constructor(public http:Http) {
    console.log('Date service connected...');
  }

  getPatients(){
    return this.patients$;
  }

  getPatient(id: number | string):Observable<Patient> {
    return this.getPatients().map( patients => patients.find( patient => patient.id === +id ) );
  }

  addPatient(name:string){
    name = name.trim();
    if (name) {
      let patient = new Patient(DataService.nextPatientID++, name);
      DummyPatients.push(patient); // add patient into patient pool
      this.patients$.next(DummyPatients);
    }
  }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
        .map(res => res.json());
  }

}
