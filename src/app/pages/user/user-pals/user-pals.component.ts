import { Component, OnInit } from '@angular/core';
import { IParsePalData } from 'src/app/interfaces/pals';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-pals',
  templateUrl: './user-pals.component.html',
  styleUrls: ['./user-pals.component.css']
})
export class UserPalsComponent implements OnInit {

  searchPal: string = '';
  palsData: Array<IParsePalData> | null = null

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if (this.userService.user) {
      this.palsData = this.userService.parsePalsData()
    }
  }

}
