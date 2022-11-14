import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPal } from 'src/app/interfaces/pals';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-pal',
  templateUrl: './user-pal.component.html',
  styleUrls: ['./user-pal.component.css']
})
export class UserPalComponent implements OnInit {

  currentUser: IUser | null = null
  palId:string = ''
  chatId:string = ''
  pal:IPal | null = null

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.user
    this.palId = this.route.snapshot.params['id']
    this.chatId
    this.pal = this.userService.getPalInfo(this.palId)
  }

}
