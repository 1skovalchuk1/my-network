import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMessage } from 'src/app/interfaces/chats';
import { IPal } from 'src/app/interfaces/pals';
import { IUser } from 'src/app/interfaces/user';
import { CHATS } from 'src/app/mock-data/chats-base';
import { PALS } from 'src/app/mock-data/pals-base';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {

  currentUser:IUser | null = null

  @ViewChild('chatWindow') chatWindow: ElementRef;

  isMessageSend = false
  message:string = ''
  messages:Array<IMessage> = []
  palsData:Array<IPal> = []

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    chatWindow: ElementRef,
    ) {
    this.chatWindow = chatWindow
  }

  ngOnInit(): void {
    this.scrollToBottom()
    this.currentUser = this.userService.user
    this.messages = CHATS[this.route.snapshot.params['id']].messages
  }

  getUsersData(id:string) {
    return PALS[id]
  }

  scrollToBottom(): void {
    this.chatWindow.nativeElement.scrollTop = 0
  }

  sendMessage() {
    if (this.currentUser && this.message.trim()) {
      this.messages.push({
        userId: this.currentUser.id,
        isRead: false,
        text:this.message.trim()})
    }
    this.message = ''
    setTimeout(() => this.isMessageSend = !this.isMessageSend, 300)
    this.isMessageSend = !this.isMessageSend
    this.scrollToBottom()
  }

  sendMessageOrNewLine(e:KeyboardEvent) {
    if (e.ctrlKey && e.key === 'Enter') {
      this.message += '\n'
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (this.message.trim()) {
        this.sendMessage()
      }
    }
  }

}

