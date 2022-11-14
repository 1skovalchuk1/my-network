import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './services/auth.service'
import { HintService } from 'src/app/hint/services/hint.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService,
              public hintService: HintService,
  ) {}

  ngOnInit(): void {
    localStorage.clear()
    this.authService.authForm.reset()
  }

}
