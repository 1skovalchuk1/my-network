import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/interfaces/list';


@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {

  currentUser:any = {}
  
  messages:List<[string,string]> = new List()

  constructor() {
  }

  ngOnInit(): void {
    this.messages.add(['Lucas', 'Lucas message6'])
    this.messages.add(['Lucas', 'Lucas message5'])
    this.messages.add(['Lucas', 'Lucas message4'])
    this.messages.add(['Lucas', 'Lucas message3'])
    this.messages.add(['Lucas', 'Lucas message2'])
    this.messages.add(['Tom', 'Tom message3'])
    this.messages.add(['Tom', 'Tom messageWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW2'])
    this.messages.add(['Lucas', 'Lucas message1WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'])
    this.messages.add(['Tom', 'Tom message1'])
    

    
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '')
    
  }

  test() {
    this.messages.add(['Tom', 'Tom message1aaaaa'])
    console.log(this.messages)
  }

}
