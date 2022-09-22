import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppLinks } from 'src/app/components/items/link/links.component';
import { selectUserData } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/states/app.state';
import * as UserActions from '../../../store/actions/user.actions'

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.css']
})
export class UserMainPageComponent implements OnInit {

  id = '5'

  user$ = this.store.pipe(select(selectUserData))

  links:Array<IAppLinks> = [
    {
      imgClass: 'link-nav',
      imgSrc: '/assets/icons/home.svg',
      pagelink: 'id',
      linkActiveClass: 'link-nav-active',
    },
    {
      imgClass: 'link-nav',
      imgSrc: '/assets/icons/fals.svg',
      pagelink: 'fals',
      linkActiveClass: 'link-nav-active',
    },
    {
      imgClass: 'link-nav',
      imgSrc: '/assets/icons/settings.svg',
      pagelink: 'settings',
      linkActiveClass: 'link-nav-active',
    },
    {
      imgClass: 'link-nav-logout',
      imgSrc: '/assets/icons/logout.svg',
      pagelink: '/',
      linkActiveClass: '',
    },
  ]

  constructor(private store: Store<IAppState>,
              private router: Router,) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(UserActions.logoutUser())
    this.router.navigate(['/'])
  }

}
