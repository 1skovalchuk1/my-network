import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-fals',
  templateUrl: './user-fals.component.html',
  styleUrls: ['./user-fals.component.css']
})
export class UserFalsComponent implements OnInit {

  friends = [...Array(5).keys()]

  constructor() { }

  ngOnInit(): void {
  }

}
