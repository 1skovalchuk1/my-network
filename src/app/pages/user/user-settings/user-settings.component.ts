import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { IUser, TUserPic } from 'src/app/interfaces';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  currentUser: IUser | null = null
  userPic:string = ''
  userInfoFormGroup: FormGroup = new FormGroup({})
  userInfoForm: FormArray<FormGroup> = new FormArray([] as Array<FormGroup>)
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

  ngOnInit(): void {
    this.currentUser = this.userService.user
    if (this.currentUser) {
      this.userPic = this.currentUser.userPic
      this.getUserInfoFormArray()
    }
    this.userInfoForm = this.userInfoFormGroup.get('info') as FormArray<FormGroup>
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
    const userName = this.userInfoFormGroup.get('name')?.value
    if (this.currentUser && this.userPic && userName) {
      const newUserInfo = this.userInfoForm.controls.map((i) => i.value)
      const newUserData = {...this.currentUser,
                            userInfo: newUserInfo,
                            userPic: this.userPic as TUserPic,
                            userName,
                          }
      this.userService.updateData(newUserData)
    }

  }

  addInfo() {
    this.userInfoForm.push(
      new FormGroup({
        title: new FormControl(),
        value: new FormControl(),
      })
    )
  }

  removeInfo(i:number) {
    this.userInfoForm.removeAt(i)
  }

  cancel() {
    this.getUserInfoFormArray()
    this.userInfoForm = this.userInfoFormGroup.get('info') as FormArray<FormGroup>
  }
}
