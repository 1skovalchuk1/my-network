import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MainPageService } from './services/main-page.service'
import * as UserActions from '../../store/actions/user.actions'
import * as HintActions from '../../store/actions/hint.actions'
import { selectUserData } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/states/app.state';
import { selectHintMessage } from 'src/app/store/selectors/hint.selectors';
import { Observable, of } from 'rxjs';
import { selectQueryParams } from 'src/app/store/selectors/router.selectors';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  hintMessage$:Observable<string> = of('')
  id: string | null = ''

  authForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  }, {validators: [this.mainPageService.isAccountNotRegistered]})

  constructor(public mainPageService: MainPageService,
              private router: Router,
              private store: Store<IAppState>,
              ) {}

  ngOnInit(): void {
    this.store.dispatch(UserActions.logoutUser())
    this.hintMessage$ = this.store.select(selectHintMessage) 
  }

  login() {
    console.log(this.authForm)
    const {email, password} = this.authForm.value
    if (!this.mainPageService.isInvalidForm(this.authForm) && email && password) {
      this.store.dispatch(UserActions.loginUser({email, password}))
      this.store.select(selectUserData).subscribe((user) => {if (user) {this.id = user.id}})
      this.router.navigate(['/user', this.id])
      this.store.dispatch(HintActions.clearHint())
    }
  }

  setHintMessage() {
    const message = this.mainPageService.getFormHintMessage(this.authForm)
    this.store.dispatch(HintActions.setHint({message}))
  }
}
