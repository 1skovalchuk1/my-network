import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMessage } from 'src/app/interfaces/chats';
import { UserChatComponent } from 'src/app/pages/user/user-chat/user-chat/user-chat.component';
import { IPal } from "../../../interfaces/pals";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  user: IPal = {
    id: '',
    isOnline: false,
    userPic: 'bear',
    userName: '',
    userInfo: []
  }

  @Input() userPic:string = ''
  @Input() isCurrentUser:boolean = true
  @Input() message:IMessage = {
    user: this.user,
    isRead: false,
    text: '',
  }
  @Output() changeIsRead = new EventEmitter<IMessage>()

  constructor(private test: UserChatComponent) {}

  ngOnInit(): void {
  }

  readMessage() {
    this.message.isRead = true
    this.changeIsRead.emit(this.message)
  }

}
