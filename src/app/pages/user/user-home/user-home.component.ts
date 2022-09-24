import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { selectUserData } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/states/app.state';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  user$:Observable<IUser | null> = of(null)

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.user$ = this.store.select(selectUserData)
    this.user$.subscribe((n) => console.log(n,123123))
  }

}
