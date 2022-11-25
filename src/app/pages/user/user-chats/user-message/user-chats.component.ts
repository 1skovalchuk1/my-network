import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-chats.component.html',
  styleUrls: ['./user-chats.component.css']
})

export class UserChatsComponent implements OnInit {

  searchChat: string = ''
  palsData: Array<any> | null = null

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (this.userService.user) {
      this.palsData = this.userService.parsePalsData()
    }
  }

}
