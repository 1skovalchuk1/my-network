import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  currentUser: IUser | null = null

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.user
  }

}
