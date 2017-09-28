import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "../../services/authenticate.service";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  currentUser:any = false;
  constructor(private authService:AuthenticateService) {
    this.authService.authCheck();
    this.currentUser = this.authService.getCurrentUser();
    console.log(this.currentUser);
  }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
