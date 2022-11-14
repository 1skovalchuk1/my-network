import { Component, OnInit } from '@angular/core';
import { IParsePalData } from 'src/app/interfaces/pals';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-chats.component.html',
  styleUrls: ['./user-chats.component.css']
})

export class UserChatsComponent implements OnInit {

  searchChat: string = ''
  palsData: Array<IParsePalData> | null = null

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (this.userService.user) {
      this.palsData = this.userService.parsePalsData()
    }
  }

}
