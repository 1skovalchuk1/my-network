import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IParseMessage } from 'src/app/interfaces/chats';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {

  @ViewChild('chatWindow') chatWindow: ElementRef;

  isMessageSend:boolean = false
  message:string = ''
  messages:Array<IParseMessage> = []
  chatId: string = ''

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    chatWindow: ElementRef,
    ) {
    this.chatWindow = chatWindow
  }

  ngOnInit(): void {
    this.scrollToBottom()
    this.chatId = this.route.snapshot.params['id']
    this.messages = this.userService.parseMessages(this.chatId)
  }

  scrollToBottom(): void {
    this.chatWindow.nativeElement.scrollTop = 0
  }

  readMessage(messageId:number, message: IParseMessage) {
    if (!message.isCurrentUser && !message.isRead) {
      this.userService.readMessage(this.chatId, messageId)
      // webSockets
      this.messages = this.userService.parseMessages(this.chatId)
    }
  }

  sendMessage() {
    this.userService.sendMessage(this.message, this.chatId)
          // webSockets
    this.messages = this.userService.parseMessages(this.chatId)

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

