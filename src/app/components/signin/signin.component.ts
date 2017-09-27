import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "../../services/authenticate.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _authenticate:AuthenticateService) { }

  ngOnInit() {

  }
}
