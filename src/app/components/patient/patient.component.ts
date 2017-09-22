import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import {DataService} from "../../services/data.service";
import {Patient} from "../../models/patient";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})

export class PatientComponent implements OnInit {
  patients$: Observable<Patient[]>;
  isPatientSelected:boolean = false;
  selectedPatient:Patient;

  constructor(private _dataService:DataService) {}

  ngOnInit() {
    return this.patients$ = this._dataService.getPatients();
  }

  displayPatientDetails(patientID: number | string){
    this._dataService.getPatient(patientID).subscribe( patient => this.selectedPatient = patient );
    this.isPatientSelected = true;
  }

}
