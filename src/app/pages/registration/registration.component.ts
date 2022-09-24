import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './service/registration.service';
import { IAppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import * as UserActions from '../../store/actions/user.actions'
import * as HintActions from '../../store/actions/hint.actions'
import { HintService } from 'src/app/components/hint/services/hint.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {

  constructor(public registrationService: RegistrationService,
              public hintService: HintService,
              private store: Store<IAppState>) { }

  ngOnInit(): void {
    localStorage.clear()
    this.store.dispatch(HintActions.clearHint())
    this.store.dispatch(UserActions.logoutUser())
    this.registrationService.registrationForm.reset()
  }
}
