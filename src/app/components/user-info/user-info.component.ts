import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-info',
  template: `
  <ng-container *ngIf="user">
    <app-img imgClass="user-home--userpic" [imgNameSrc]="user.userPic" [isUserPic]="true"></app-img>
    <div class="wrapper-user-info">
      <app-p pClass="user-home--info-name">{{user.userName}}</app-p>
      <ng-container *ngFor="let data of user.userInfo">
        <app-p pClass="user-home--info-title">{{data.title}}</app-p>
        <app-p pClass="user-home--info-value">{{data.value}}</app-p>
      </ng-container>
    </div>
    <ng-content></ng-content>
  </ng-container>
  `,
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  constructor() { }

  @Input() user: IUser | null = null;

}
