import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { USERS } from '../../mock-data/mock-users'

export interface Login {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private isUserLoggedIn: boolean = false;

  constructor() {}

  login({ email, password }: { email: string; password: string; }) {
    this.isUserLoggedIn = USERS[email] && USERS[email].password == password;
    this.isUserLoggedIn ? "true" : "false"
  }

  logout() {
    this.isUserLoggedIn = false;
  }

  isAuthenticated():Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isUserLoggedIn)
      }, 1000)
    })
  }

}

