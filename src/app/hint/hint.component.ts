import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-hint',
  template: `
    <div [ngClass]="(hintMessage$ | async) ? 'block-error-message-visible' : ''" 
      class="block-error-message">
      <app-img imgNameSrc="message"></app-img>
      <app-p pClass="hint--text">{{hintMessage$ | async}}</app-p>
    </div>
    `,
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {

  hintMessage$:Observable<string> = of('')

  constructor() {}

  ngOnInit(): void {
    // this.store.dispatch(HintActions.clearHint())
    // this.hintMessage$ = this.store.select(selectHintMessage)
  }

}
