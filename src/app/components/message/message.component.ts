import { Component, Input } from '@angular/core';
import { IParseMessage } from 'src/app/interfaces/chats';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  currentUser: IUser | null = null

  @Input() message:IParseMessage | null = null

  constructor() {}

}
