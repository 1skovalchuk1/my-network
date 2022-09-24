import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  currentUser:any = {}

  constructor() {}

  ngOnInit(): void {
    this.currentUser = (JSON.parse(localStorage.getItem('currentUser') || ''))
  }

}
