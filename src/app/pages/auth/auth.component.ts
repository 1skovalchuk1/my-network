import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './services/auth.service'
import * as UserActions from '../../store/actions/user.actions'
import * as HintActions from '../../store/actions/hint.actions'
import { IAppState } from 'src/app/store/states/app.state';
import { HintService } from 'src/app/components/hint/services/hint.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService,
              public hintService: HintService,
              private store: Store<IAppState>,
              ) {}

  ngOnInit(): void {
    localStorage.clear()
    this.store.dispatch(HintActions.clearHint())
    this.store.dispatch(UserActions.logoutUser())
    this.authService.authForm.reset()
  }

}
