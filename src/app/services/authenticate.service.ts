import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { Users } from '../dummy-users';
import {Observable} from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";

@Injectable()
export class AuthenticateService {
  users$:any = Observable.of(Users);
  isValidLogin:boolean = false;

  constructor(private router:Router) {}

  getUsers(){
    return this.users$;
  }

  login( credential:any ){
    this.getUsers().subscribe( users  => {
      for( let i = 0; i < users.length; i++ ){
        if (users[i].username === credential.username && users[i].password === credential.password) {
          this.isValidLogin = true;
          localStorage.setItem('currentUser', JSON.stringify(users[i]));
          break;
        }
      }
    });

    if( this.isValidLogin ){
      this.router.navigate(['/record-behaviour']);
      return true;
    }else{
     return false;
    }
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.isValidLogin = false;
    this.router.navigate(['/signin']);
  }

  authCheck(){
    if ( localStorage.getItem("currentUser") === null ){
      this.router.navigate(['/signin']);
    }
  }

  getCurrentUser(){
    if ( localStorage.getItem("currentUser") === null ){
     return false;
    }else{
      return JSON.parse(localStorage.getItem("currentUser"));
    }
  }
}
