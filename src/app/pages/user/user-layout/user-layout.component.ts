import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-layout',
  template: `
    <div class="flex-user-layout">
      <app-nav [isNewMessage]="isNewMessage"></app-nav>
      <div class="user-page">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  isNewMessage:boolean = true

  constructor() {}

  ngOnInit(): void {}

}
