import { Component, OnInit } from '@angular/core';
import { IPal } from 'src/app/interfaces/user';
import { PALS } from 'src/app/mock-data/mock-users';

@Component({
  selector: 'app-user-pals',
  templateUrl: './user-pals.component.html',
  styleUrls: ['./user-pals.component.css']
})
export class UserPalsComponent implements OnInit {

  searchPal: string = '';
  currentUser:any = {}
  pals:Array<IPal> = []


  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '')
    this.pals = [...this.currentUser.pals].map((id) => PALS[id])
  }

}
