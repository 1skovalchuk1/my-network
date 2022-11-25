import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces';
import { USERS } from 'src/app/mock-data';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-pal',
  template: `
    <app-user-info [user]="pal">
      <a [routerLink]="['/user/chats', chatId]" class="link-send-message">
        <app-img imgClass="user-pal--send-message" imgNameSrc="send-message"></app-img>
      </a>
      <app-button
        (click)="removePal()"
        imgNameSrc='trash'
      ></app-button>
    </app-user-info>
  `,
  styleUrls: ['./user-pal.component.css']
})
export class UserPalComponent implements OnInit {

  relId:string = ''
  chatId:string | null = null
  pal: IUser | null = null

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.relId = `${this.route.snapshot.params['id']}`
    this.chatId = this.userService.getPalInfo(this.relId)?.palChatId
    this.pal = USERS[this.userService.getPalInfo(this.relId)?.palId || '']
  }

  removePal() {
    this.userService.removePal(this.relId)
  }

}
