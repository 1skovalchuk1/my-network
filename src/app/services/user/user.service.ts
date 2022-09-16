import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { USERS } from 'src/app/mock-data/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login({ email, password }: { email: string, password: string}) {
    if (USERS[email] && USERS[email].password == password) {
      return of(USERS[email])
    }
    return  of()
  }

}
