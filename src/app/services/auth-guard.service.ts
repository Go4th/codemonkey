import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
              private authService: AuthService) { }

  canActivate() {
    if  ( this.authService.isLoggedIn() ) {

      return true;

    }

console.log("this happened.")
    return false;
  }

}
