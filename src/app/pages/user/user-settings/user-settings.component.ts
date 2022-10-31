import { Component, OnInit } from '@angular/core';
import { IUser, TUserPic } from 'src/app/interfaces/user';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  currentUser: IUser | null = null
  userPic:TUserPic   | null = null
  userInfoFormGroup: FormGroup = new FormGroup({})
  // userInfoForm: FormArray<FormGroup> = new FormArray([] as Array<any>)
  userPics:Array<TUserPic> = [
    'bear',
    'bull',
    'cat',
    'deer',
    'dog',
    'dolphin',
    'eagle',
    'elephant',
    'elk',
    'frog',
    'giraffe',
    'horse',
    'lion',
    'penguin',
    'rhinoceros',
    'squirrel',
  ]

  constructor(
    private userService: UserService,
  ) {}

  get refForm() {
    return this.userInfoFormGroup.get('info') as FormArray<FormGroup>;
  }

  ngOnInit(): void {
    this.currentUser = this.userService.user
    if (this.currentUser) {
      this.userPic = this.currentUser.userPic
      this.getUserInfoFormArray()
    }
    // console.log(this.userInfoForm)
    // console.log(this.userInfoForm?.controls.forEach((e) => console.log(e)))
  }

  getUserInfoFormArray() {
    this.userInfoFormGroup = new FormGroup({
      name: new FormControl(this.currentUser?.userName),
      info: new FormArray(
        this.currentUser?.userInfo.map(
          ({title, value}) => {
            return new FormGroup({
              title: new FormControl(title),
              value: new FormControl(value),
          })
          }
        ) || []
      )
    })
    // this.userInfoForm = new FormArray(
    //   this.currentUser?.userInfo.map(
    //     ({title, value}) => {
    //       return new FormGroup({
    //         title: new FormControl(title),
    //         value: new FormControl(value),
    //     })
    //     }
    //   ) || []
    // )
  }

  next() {
    const id = this.userPics.findIndex((i) => i === this.userPic) + 1
    if (id >= this.userPics.length) {
      this.userPic = this.userPics[0]
      return
    }
    this.userPic = this.userPics[id]
    
  }

  previous() {
    const id = this.userPics.findIndex((i) => i === this.userPic) - 1
    if (id < 0) {
      this.userPic = this.userPics[this.userPics.length-1]
      return
    }
    this.userPic = this.userPics[id]
  }

  submit() {
    console.log(this.userInfoFormGroup)
  }
}
