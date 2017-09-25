import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import {DataService} from "../../services/data.service";
import {Patient} from "../../models/patient";
import {Observable} from "rxjs/Observable";
import { BehaviourSummary, Behaviour, BehaviourDetails } from '../../models/behaviour-type';
import { DummyBehaviour, DummyBehaviourDetails, DummyBehaviourSummary } from '../../dummy-behaviour-types';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})

export class PatientComponent implements OnInit {
  patients$: Observable<Patient[]>;
  isPatientSelected:boolean = false;
  selectedPatient:Patient;
  behaviourSummaries:BehaviourSummary[];
  behaviours:Behaviour[];
  behaviourDetails:BehaviourDetails[];
  isBehaviourTypeSelected:boolean = false;
  isBehaviourCodeSelected:boolean = false;
  selectedBehaviourCode:string;

  constructor(private _dataService:DataService) {
    this.behaviourSummaries = DummyBehaviourSummary;
    this.behaviours = DummyBehaviour;
    this.behaviourDetails = DummyBehaviourDetails;
      console.log(this.behaviours);
  }

  ngOnInit() {
    return this.patients$ = this._dataService.getPatients();
  }

  displayPatientDetails(patientID: number | string){
    this._dataService.getPatient(patientID).subscribe( patient => this.selectedPatient = patient );
    this.isPatientSelected = true;

  }

  displayBehaviourTypes(behaviourType: number | string){
    this.isBehaviourTypeSelected = true;
  }

  displayBehaviourDetails(behaviourCode:string){
      this.selectedBehaviourCode = behaviourCode;
      this.isBehaviourCodeSelected = true;
  }
}
