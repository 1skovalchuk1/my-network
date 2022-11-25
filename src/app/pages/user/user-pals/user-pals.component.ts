import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-pals',
  templateUrl: './user-pals.component.html',
  styleUrls: ['./user-pals.component.css']
})
export class UserPalsComponent implements OnInit {

  searchPal: string = '';
  palsData: Array<any> | null = null

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if (this.userService.user) {
      this.palsData = this.userService.parsePalsData()
    }
  }

}
