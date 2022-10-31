import { Component, OnInit } from '@angular/core';
import { IPal } from 'src/app/interfaces/pals';
import { PALS } from 'src/app/mock-data/pals-base';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-pals',
  templateUrl: './user-pals.component.html',
  styleUrls: ['./user-pals.component.css']
})
export class UserPalsComponent implements OnInit {

  searchPal: string = '';
  currentUser:any = {}
  pals:Array<IPal> = []


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.user
    this.pals = [...this.currentUser.pals].map((id) => PALS[id])
  }

}
