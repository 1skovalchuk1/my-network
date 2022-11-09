import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { PALS } from 'src/app/mock-data/pals-base';
import { UserService } from '../../services/user.service';
import { IPal } from 'src/app/interfaces/pals';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-chats.component.html',
  styleUrls: ['./user-chats.component.css']
})
export class UserChatsComponent implements OnInit {
  
  searchChat: string = ''
  currentUser: IUser | null = null
  pals: Array<IPal> = []


  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.user
    if (this.currentUser) {
      this.pals = [...this.currentUser.pals].map((id) => PALS[id])
    }
  }

  getChatId(palId:string) {
    return this.currentUser?.chats[this.currentUser?.pals.indexOf(palId)]
  }

}
