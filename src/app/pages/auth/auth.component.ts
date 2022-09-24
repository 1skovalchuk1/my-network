import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from './services/auth.service'
import * as UserActions from '../../store/actions/user.actions'
import * as HintActions from '../../store/actions/hint.actions'
import { selectUserData } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/states/app.state';
import { HintService } from 'src/app/components/hint/services/hint.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

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
  }, {validators: [this.hintService.isAccountNotRegistered]})

  constructor(public authService: AuthService,
              private hintService: HintService,
              private router: Router,
              private store: Store<IAppState>,
              ) {}

  ngOnInit(): void {
    this.store.dispatch(HintActions.clearHint())
    this.store.dispatch(UserActions.logoutUser())
  }

  login():void {
    const {email, password} = this.authForm.value
    if (!this.hintService.isInvalidForm(this.authForm) && email && password) {
      this.store.dispatch(UserActions.loginUser({email, password}))
      this.store.select(selectUserData).subscribe((user) => {if (user) {this.id = user.id}})
      this.router.navigate(['/user/home'])
    }
  }

  setHintMessage():void {
    const message = this.hintService.getFormHintMessage(this.authForm)
    this.store.dispatch(HintActions.setHint({message}))
  }

}
