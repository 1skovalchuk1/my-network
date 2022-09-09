import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { USERS } from 'src/app/mock-data/mock-users';
import { AuthService } from '../../services/auth/auth.service';
import { MainPageService } from './services/main-page.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  queryParam = ''

  authForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  })

  constructor(public mainPageService: MainPageService,
              public authService: AuthService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {}

  login() {
    this.authService.login({
      email: this.authForm.get('email')?.value || '',
      password:this.authForm.get('password')?.value || '',
    })
    console.log(this.queryParam,1)
    this.route.queryParams.subscribe((p) => {
      this.queryParam = p['auth']
      console.log(this.queryParam,2)
    })
    console.log(this.queryParam,3)
  }

  getId() {
    const email = this.authForm.get('email')?.value;
    const id = email ? USERS[email]?.id : 's'
    console.log(id, email)
    return id
  }

}
