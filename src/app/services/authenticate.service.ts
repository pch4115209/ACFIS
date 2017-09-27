import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

const logins = [
                { username:'admin', password:'admin', firstname:'John', lastname:'Smith' },
                { username:'staff', password:'staff', firstname:'Dave', lastname:'Lee'   }
              ];

@Injectable()
export class AuthenticateService {
  private router:Router;

  constructor() {

  }

  login( credential:any ){
    if( credential.username === login.username && credential.password === login.password){

    }
  }

  logout(){

  }


}
