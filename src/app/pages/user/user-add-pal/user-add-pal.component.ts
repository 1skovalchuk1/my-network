import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-add-pal',
  templateUrl: './user-add-pal.component.html',
  styleUrls: ['./user-add-pal.component.css']
})
export class UserAddPalComponent implements OnInit {

  currentTime:number = Date.now()
  startTime:number = 0
  timeOver:boolean = false
  isLoading:boolean = false
  uuid:string = ''
  palSecretKey = ''

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.refreshSecretKey()
  }

  secretKeyGenegator() {
    this.uuid = self.crypto.randomUUID().slice(0,8)
  }

  timer() {
    this.timeOver = false
    setTimeout(() => {
      if (this.startTime >= 180_000) {
        this.timeOver = true
        return
      }
      this.startTime = Date.now() - this.currentTime
      this.timer()
    }, 500)
  }

  refreshSecretKey() {
    this.startTime = 0
    this.currentTime = Date.now()
    this.timer()
    this.secretKeyGenegator()
  }

  addPal() {
    this.isLoading = true
    setTimeout(() => {
      this.userService.addPal(this.isLoading, this.palSecretKey, this.uuid)
      this.isLoading = false
      this.refreshSecretKey()
    }, 2000)
  }

  cancel() {
    this.palSecretKey = ''
  }

}
