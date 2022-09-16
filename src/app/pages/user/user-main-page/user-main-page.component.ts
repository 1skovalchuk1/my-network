import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectUserData } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/states/app.state';
import * as UserActions from '../../../store/actions/user.actions'

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.css']
})
export class UserMainPageComponent implements OnInit {

  user$ = this.store.pipe(select(selectUserData))

  constructor(private store: Store<IAppState>,
              private router: Router,) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(UserActions.logoutUser())
    this.router.navigate(['/'])
  }

}
