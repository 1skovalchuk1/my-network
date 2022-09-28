import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPal } from 'src/app/interfaces/user';
import { PALS } from 'src/app/mock-data/mock-users';
import { selectRouteParams } from 'src/app/store/selectors/router.selectors';
import { IAppState } from 'src/app/store/states/app.state';

@Component({
  selector: 'app-user-pal',
  templateUrl: './user-pal.component.html',
  styleUrls: ['./user-pal.component.css']
})
export class UserPalComponent implements OnInit {

  pal:IPal = {
    id: '',
    userName: '',
    userPic: '',
    isOnline: false
  }

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.select(selectRouteParams).subscribe((obj) => this.pal = PALS[obj['id']])
    console.log(this.pal)
  }

}
