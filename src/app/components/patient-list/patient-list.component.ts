import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "../../services/authenticate.service";
import {DataService} from "../../services/data.service";
import {Patient} from "../../models/patient";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  public patients$;//:Observable<Patient[]>;
  public filterQuery = "";
  public rowsOnPage = 1;
  public sortBy = "name";
  public sortOrder = "asc";

  constructor(private _authService:AuthenticateService, private _dataService:DataService) {
    _authService.authCheck();
  }

  ngOnInit() {
    //this.patients$ = this._dataService.getPatients();
    this._dataService.getPatients().subscribe( patients => {
        setTimeout(() => {
            this.patients$ = patients
          //console.log(this.patients$);
        }, 500);
      }
    );
  }


}
