import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-home',
  template: `
    <app-user-info [user]="user"></app-user-info>
  `
})
export class UserHomeComponent {

  user:IUser | null = null

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.user = this.userService.user
  }

}
