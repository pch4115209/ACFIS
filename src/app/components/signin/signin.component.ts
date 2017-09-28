import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "../../services/authenticate.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:any = {username:'', password:''};
  isValid:boolean = true;

  constructor(private _authService:AuthenticateService) {
    this._authService.authCheck();
  }

  ngOnInit() {

  }


  onSubmit(login){
    this.user = {
        username: login.username,
        password: login.password,
    };

    this.isValid = this._authService.login(this.user);

  }

}
