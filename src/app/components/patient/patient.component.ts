import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import {DataService} from "../../services/data.service";
import {Patient} from "../../models/patient";
import {Observable} from "rxjs/Observable";
import { BehaviourSummary, Behaviour, BehaviourDetails } from '../../models/behaviour-type';
import { DummyBehaviour, DummyBehaviourDetails, DummyBehaviourSummary } from '../../dummy-behaviour-types';
import {AuthenticateService} from "../../services/authenticate.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})

export class PatientComponent implements OnInit {
  patients$: Observable<Patient[]>;
  isPatientSelected:boolean = false;
  selectedPatient:Patient; // Selected patient
  behaviourSummaries:BehaviourSummary[]; // dummy data
  behaviours:Behaviour[];                //dummy data
  behaviourDetails:BehaviourDetails[];   //dummy data
  isBehaviourTypeSelected:boolean = false;
  isBehaviourCodeSelected:boolean = false;
  selectedBehaviourType:number | string;
  selectedBehaviourCode:string;
  selectedBehaviourDetailInfo:string;

  constructor(private _dataService:DataService, private authService:AuthenticateService) {
    this.authService.authCheck();
    this.behaviourSummaries = DummyBehaviourSummary;
    this.behaviours = DummyBehaviour;
    this.behaviourDetails = DummyBehaviourDetails;
      console.log(this.behaviours);
  }

  ngOnInit() {
    this.patients$ = this._dataService.getPatients();
  }

  displayPatientDetails(patientID: number | string){
    this._dataService.getPatient(patientID).subscribe( patient => this.selectedPatient = patient );
    this.isPatientSelected = true;
    this.isBehaviourTypeSelected = false;
    this.isBehaviourCodeSelected = false;
    this.selectedBehaviourType = -1;//reset the behaviour details

  }

  displayBehaviourTypes(){
    this.isBehaviourTypeSelected = true;

    if( this.selectedBehaviourType == -1 ){ // if behaviour is deleted, reset behaviour selection
      this.resetBehaviourSelection();
    }
  }

  displayBehaviourDetails(){
      this.isBehaviourCodeSelected = true;
  }

  private resetBehaviourSelection(){
    this.selectedBehaviourCode = '';
    this.selectedBehaviourDetailInfo = '';
    this.isBehaviourTypeSelected = false;
    this.isBehaviourCodeSelected = false;
  }

}
