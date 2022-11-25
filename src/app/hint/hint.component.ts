import { Component, OnInit } from '@angular/core';
import { HintService } from './services/hint.service';

@Component({
  selector: 'app-hint',
  template: `
    <div [ngClass]="hintMessage ? 'block-error-message-visible' : ''" 
      class="block-error-message">
      <app-img imgNameSrc="message"></app-img>
      <app-p pClass="hint--text">{{hintMessage}}</app-p>
    </div>
    `,
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {

  hintMessage: string = ''

  constructor(
    private hintService: HintService
  ) {}

  ngOnInit(): void {
    this.hintService.hintMessage.subscribe((hintMessage) => this.hintMessage = hintMessage)
  }

}
