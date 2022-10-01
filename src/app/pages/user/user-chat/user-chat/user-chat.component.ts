import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { List } from 'src/app/interfaces/list';
import { IMessage } from 'src/app/interfaces/message';
import { IUser } from 'src/app/interfaces/user';


@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('chat') private chat: ElementRef;

  isMessageSend = false
  currentUser:IUser | null = null
  message:string = ''
  messages:List<IMessage> = new List()

  constructor(chat: ElementRef) {
    this.chat = chat
  }


  ngAfterViewChecked() {
    this.scrollToBottom()
  } 

  ngOnInit(): void {
    this.scrollToBottom();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '')
  }

  scrollToBottom(): void {
    try {
        this.chat.nativeElement.scrollTop = this.chat.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

  sendMessage() {
    if (this.currentUser && this.message.trim()) {
      this.messages.add({
        name:this.currentUser?.userName,
        text:this.message.trim()})
    }
    this.message = ''
    setTimeout(() => this.isMessageSend = !this.isMessageSend, 300)
    this.isMessageSend = !this.isMessageSend
  }

  newLineEnter(e:KeyboardEvent) {
    if (e.ctrlKey && e.key === 'Enter') {
      this.message += '\n';
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (this.message.trim()) {
        this.sendMessage()
      }
    }
  }

}

