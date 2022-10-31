import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/states/app.state';
import * as HintActions from '../../store/actions/hint.actions'
import { selectHintMessage } from 'src/app/store/selectors/hint.selectors';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-hint',
  template: `
    <div 
      [ngClass]="(hintMessage$ | async) ? 'block-error-message-visible' : ''" 
      class="block-error-message">
      <img src="assets/icons/message.svg"/>
      <p class="error-message">{{hintMessage$ | async}}</p>
    </div>
    `,
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {

  hintMessage$:Observable<string> = of('')

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(HintActions.clearHint())
    this.hintMessage$ = this.store.select(selectHintMessage)
  }

}
